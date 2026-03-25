// TaskMaster Pro - Versión Mejorada
const translations = {
    es: {
        title: "🎯 TaskMaster Pro",
        subtitle: "Organiza tu día con inteligencia",
        placeholder_search: "Buscar tareas...",
        history_title: "Historial de Tareas",
        notif_banner_title: "¿Quieres recibir recordatorios?",
        notif_banner_text: "Activaremos sonidos y alertas para tus tareas.",
        btn_allow: "Permitir",
        settings_title: "⚙️ Configuración",
        btn_close: "Cerrar",
        cat_work: "Trabajo", cat_personal: "Personal", cat_health: "Salud",
        title_pomodoro: "🍅 Pomodoro", title_notifications: "🔔 Avisos"
    }
};

class TaskMaster {
    constructor() {
        // Cargar Datos
        this.tasks = this.loadData('tasks', []);
        this.categories = this.loadData('categories', [
            { id: 'work', name: 'Trabajo', color: '#f56565' },
            { id: 'personal', name: 'Personal', color: '#4facfe' },
            { id: 'health', name: 'Salud', color: '#48bb78' }
        ]);
        this.settings = this.loadData('settings', { theme: 'light', language: 'es', soundTheme: 'classic' });
        
        this.pomodoro = { time: 25 * 60, isRunning: false, interval: null };
        this.currentView = 'list';

        this.init();
    }

    loadData(key, def) {
        const data = localStorage.getItem('tm-' + key);
        return data ? JSON.parse(data) : def;
    }

    saveData(key, data) {
        localStorage.setItem('tm-' + key, JSON.stringify(data));
    }

    init() {
        this.renderAll();
        this.setupEventListeners();
        this.checkNotificationPermission();
        this.applyTheme();
    }

    setupEventListeners() {
        // Navegación
        document.getElementById('listViewBtn').onclick = () => this.switchView('list');
        document.getElementById('calendarViewBtn').onclick = () => this.switchView('calendar');
        document.getElementById('historyBtn').onclick = () => this.switchView('history');
        document.getElementById('settingsBtn').onclick = () => document.getElementById('settingsModal').style.display = 'block';
        document.getElementById('closeSettings').onclick = () => document.getElementById('settingsModal').style.display = 'none';

        // Categorías
        document.getElementById('btnAddCategory').onclick = () => this.addCategory();

        // Pomodoro
        document.getElementById('playBtn').onclick = () => this.startPomodoro();
        document.getElementById('pauseBtn').onclick = () => this.stopPomodoro();
        document.getElementById('resetBtn').onclick = () => this.resetPomodoro();

        // Permisos
        document.getElementById('btnAllowNotif').onclick = () => this.requestNotifPermission();
        document.getElementById('btnCloseNotifBanner').onclick = () => document.getElementById('notifPermissionBanner').classList.remove('show');
    }

    // --- GESTIÓN DE CATEGORÍAS ---
    renderCategoryManager() {
        const list = document.getElementById('categoryManagerList');
        list.innerHTML = '';
        this.categories.forEach(cat => {
            const item = document.createElement('div');
            item.className = 'cat-manage-item';
            item.innerHTML = `
                <div class="cat-manage-info">
                    <div class="cat-color-dot" style="background:${cat.color}"></div>
                    <span>${cat.name}</span>
                </div>
                <button class="btn-icon" onclick="app.deleteCategory('${cat.id}')"><i class="fa-solid fa-trash"></i></button>
            `;
            list.appendChild(item);
        });
        this.updateCategorySelects();
    }

    addCategory() {
        const name = document.getElementById('newCatName').value;
        const color = document.getElementById('newCatColor').value;
        if (!name) return;
        this.categories.push({ id: Date.now().toString(), name, color });
        this.saveData('categories', this.categories);
        document.getElementById('newCatName').value = '';
        this.renderCategoryManager();
        this.showToast("Categoría añadida");
    }

    deleteCategory(id) {
        this.categories = this.categories.filter(c => c.id !== id);
        this.saveData('categories', this.categories);
        this.renderCategoryManager();
    }

    updateCategorySelects() {
        const filter = document.getElementById('filterCategory');
        if (!filter) return;
        filter.innerHTML = '<option value="all">Todas</option>' + 
            this.categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    }

    // --- VISTAS ---
    switchView(view) {
        this.currentView = view;
        document.querySelectorAll('.task-section, .calendar-section').forEach(s => s.classList.add('view-hidden'));
        document.getElementById('listViewBtn').classList.remove('active');
        document.getElementById('calendarViewBtn').classList.remove('active');
        document.getElementById('historyBtn').classList.remove('active');

        if (view === 'list') {
            document.getElementById('list-view-section').classList.remove('view-hidden');
            document.getElementById('listViewBtn').classList.add('active');
        } else if (view === 'calendar') {
            document.getElementById('calendar-view-section').classList.remove('view-hidden');
            document.getElementById('calendarViewBtn').classList.add('active');
            this.initCalendar();
        } else if (view === 'history') {
            document.getElementById('history-view-section').classList.remove('view-hidden');
            document.getElementById('historyBtn').classList.add('active');
            this.renderHistory();
        }
    }

    // --- TAREAS Y HISTORIAL ---
    renderTasks() {
        const list = document.getElementById('tasksList');
        list.innerHTML = '';
        // Solo tareas NO completadas o completadas hoy
        const activeTasks = this.tasks.filter(t => !t.completed);
        activeTasks.forEach(t => list.appendChild(this.createTaskEl(t)));
        if (activeTasks.length === 0) list.innerHTML = "<p style='text-align:center'>¡Sin tareas pendientes! 🎉</p>";
    }

    renderHistory() {
        const list = document.getElementById('historyList');
        list.innerHTML = '';
        const completedTasks = this.tasks.filter(t => t.completed);
        completedTasks.forEach(t => list.appendChild(this.createTaskEl(t)));
        if (completedTasks.length === 0) list.innerHTML = "<p style='text-align:center'>Aún no tienes historial.</p>";
    }

    createTaskEl(task) {
        const el = document.createElement('div');
        el.className = `task-item ${task.completed ? 'completed' : ''}`;
        const cat = this.categories.find(c => c.id === task.categoryId) || { color: '#ccc' };
        el.style.borderLeftColor = cat.color;

        el.innerHTML = `
            <div class="task-info">
                <h4>${task.title}</h4>
                <small>${cat.name}</small>
            </div>
            <div class="task-actions">
                <button onclick="app.toggleTask('${task.id}')" class="btn-icon"><i class="fa-solid ${task.completed ? 'fa-circle-check' : 'fa-circle'}"></i></button>
                <button onclick="app.deleteTask('${task.id}')" class="btn-icon"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        return el;
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            task.completedAt = task.completed ? new Date().toISOString() : null;
            this.saveData('tasks', this.tasks);
            this.renderTasks();
            this.renderHistory();
            this.playSound('click');
        }
    }

    // --- NOTIFICACIONES Y SONIDO ---
    checkNotificationPermission() {
        if (Notification.permission === 'default') {
            setTimeout(() => {
                document.getElementById('notifPermissionBanner').classList.add('show');
            }, 2000);
        }
    }

    async requestNotifPermission() {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            this.showToast("¡Notificaciones activadas!");
        }
        document.getElementById('notifPermissionBanner').classList.remove('show');
    }

    playSound(type) {
        // Usamos la API de vibración si está disponible
        if ("vibrate" in navigator) {
            navigator.vibrate(100);
        }
        // Intentar reproducir sonido (muchos navegadores móviles lo bloquean si no hay click)
        console.log("Sonido reproducido: " + type);
    }

    showToast(msg) {
        const toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // --- OTROS ---
    renderAll() {
        this.renderTasks();
        this.renderCategoryManager();
        this.switchView('list');
        document.getElementById('preloader').style.display = 'none';
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.settings.theme);
    }

    initCalendar() {
        const calendarEl = document.getElementById('calendar');
        if (!this.calendarObj) {
            this.calendarObj = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                locale: 'es',
                height: 'auto',
                events: this.tasks.map(t => ({ title: t.title, start: t.date, color: '#4facfe' }))
            });
        }
        this.calendarObj.render();
    }
}

// Iniciar App
const app = new TaskMaster();
