// main.js - TaskMaster Pro (VERSIÓN COMPLETA INTEGRADA)
const translations = {
    es: { 
        title: "🎯 TaskMaster Pro", subtitle: "Organiza tu día con inteligencia", stat_total: "Total", stat_completed: "Completadas", stat_pending: "Pendientes", stat_overdue: "Vencidas", form_title: "¿Qué necesitas hoy?", label_task: "Tarea", placeholder_task: "Ej: Diseñar logo (N)", label_category: "Categoría", label_date: "Fecha", label_time: "Hora", btn_add_task: "➕ Agregar", placeholder_search: "Buscar...", filter_all: "Todas", empty_state_title: "¡Todo despejado!", empty_state_text: "Añade una tarea.", title_notifications: "🔔 Notificaciones", title_pomodoro: "🍅 Pomodoro", settings_title: "⚙️ Configuración", history_title: "📚 Historial de Tareas", notif_banner_title: "¿Recordatorios?", notif_banner_text: "Activa alertas de tareas.", btn_allow: "Permitir"
    },
    en: { 
        title: "🎯 TaskMaster Pro", subtitle: "Smart daily organization", stat_total: "Total", stat_completed: "Completed", stat_pending: "Pending", stat_overdue: "Overdue", form_title: "What's for today?", label_task: "Task", placeholder_task: "e.g. Design (N)", label_category: "Category", label_date: "Date", label_time: "Time", btn_add_task: "➕ Add", placeholder_search: "Search...", filter_all: "All", empty_state_title: "All clear!", empty_state_text: "Add a task.", title_notifications: "🔔 Notifications", title_pomodoro: "🍅 Pomodoro", settings_title: "⚙️ Settings", history_title: "📚 History", notif_banner_title: "Enable reminders?", notif_banner_text: "Get task alerts.", btn_allow: "Allow"
    }
};

const SVGs = { noTasks: `<svg viewBox="0 0 128 128" width="80" xmlns="http://www.w3.org/2000/svg"><path fill="gray" d="M96 34H32c-3 0-6 3-6 6v68c0 3 3 6 6 6h64c3 0 6-3 6-6V40c0-3-3-6-6-6z"/></svg>` };

class TaskMaster {
    constructor() {
        this.tasks = this.loadData('tasks', []);
        this.categories = this.loadData('categories', [
            { id: 'work', name: 'Trabajo', color: '#f56565' },
            { id: 'personal', name: 'Personal', color: '#4facfe' }
        ]);
        this.settings = this.loadData('settings', { theme: 'light', language: 'es', pomodoro: { work: 25 } });
        this.gamificationData = this.loadData('gamification', { streak: { current: 0 } });
        
        this.currentView = 'list';
        this.pomodoroState = { time: this.settings.pomodoro.work * 60 };
        
        this.initializeUI();
        this.initializeEventListeners();
        this.renderAll();
    }

    loadData(k, d) { const r = localStorage.getItem('tm-' + k); return r ? JSON.parse(r) : d; }
    saveData(k, v) { localStorage.setItem('tm-' + k, JSON.stringify(v)); }

    initializeUI() {
        this.applySettings();
        if (Notification.permission === 'default') {
            setTimeout(() => document.getElementById('notifPermissionBanner').classList.add('show'), 2000);
        }
    }

    applySettings() {
        document.documentElement.setAttribute('data-theme', this.settings.theme);
        document.documentElement.lang = this.settings.language;
        this.translateUI();
    }

    translateUI() {
        const lang = this.settings.language;
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const k = el.getAttribute('data-translate-key');
            if(translations[lang][k]) el.textContent = translations[lang][k];
        });
    }

    initializeEventListeners() {
        document.getElementById('listViewBtn').onclick = () => this.toggleView('list');
        document.getElementById('calendarViewBtn').onclick = () => this.toggleView('calendar');
        document.getElementById('historyViewBtn').onclick = () => this.toggleView('history');
        document.getElementById('settingsBtn').onclick = () => document.getElementById('settingsModal').style.display='block';
        document.getElementById('closeSettings').onclick = () => document.getElementById('settingsModal').style.display='none';
        document.getElementById('btnAddCategory').onclick = () => this.addCategory();
        document.getElementById('btnAllowNotif').onclick = () => this.requestNotifPermission();
        document.getElementById('btnCloseNotifBanner').onclick = () => document.getElementById('notifPermissionBanner').classList.remove('show');
        document.getElementById('searchInput').oninput = () => this.renderTasks();
        document.getElementById('filterCategory').onchange = () => this.renderTasks();
    }

    toggleView(v) {
        this.currentView = v;
        const ids = ['list-view-section', 'calendar-view-section', 'history-view-section'];
        ids.forEach(id => document.getElementById(id).classList.add('view-hidden'));
        document.getElementById(v + '-view-section').classList.remove('view-hidden');
        
        const btnIds = { list: 'listViewBtn', calendar: 'calendarViewBtn', history: 'historyViewBtn' };
        Object.values(btnIds).forEach(id => document.getElementById(id).classList.remove('active'));
        document.getElementById(btnIds[v]).classList.add('active');

        if(v === 'calendar') this.initCalendar();
        this.renderTasks();
    }

    renderTasks() {
        const list = document.getElementById('tasksList');
        const hList = document.getElementById('historyList');
        const today = new Date().toISOString().split('T')[0];
        
        list.innerHTML = '';
        if(hList) hList.innerHTML = '';

        const filter = document.getElementById('filterCategory').value;

        this.tasks.forEach(task => {
            if (filter !== 'all' && task.category !== filter) return;
            
            const isCompletedToday = task.completedAt && task.completedAt.startsWith(today);
            const el = this.createTaskEl(task);

            if (this.currentView === 'history') {
                if (task.completed && !isCompletedToday) hList.appendChild(el);
            } else {
                if (!task.completed || isCompletedToday) list.appendChild(el);
            }
        });
    }

    createTaskEl(task) {
        const cat = this.categories.find(c => c.id === task.category) || { color: 'gray', name: '?' };
        const div = document.createElement('div');
        div.className = `task-item ${task.completed ? 'completed' : ''}`;
        div.style.borderLeftColor = cat.color;
        div.innerHTML = `
            <div>
                <p class="task-title">${task.title}</p>
                <div class="task-meta"><span>${cat.name}</span> <span>${task.date || ''}</span></div>
            </div>
            <button class="btn" onclick="app.toggleTask('${task.id}')"><i class="fa-solid ${task.completed ? 'fa-check-circle' : 'fa-circle'}"></i></button>
        `;
        return div;
    }

    toggleTask(id) {
        const t = this.tasks.find(x => x.id == id);
        if(t) {
            t.completed = !t.completed;
            t.completedAt = t.completed ? new Date().toISOString() : null;
            this.saveData('tasks', this.tasks);
            this.renderTasks();
            this.playSound();
        }
    }

    addCategory() {
        const name = document.getElementById('newCatName').value;
        const color = document.getElementById('newCatColor').value;
        if(!name) return;
        this.categories.push({ id: 'cat-' + Date.now(), name, color });
        this.saveData('categories', this.categories);
        this.renderAll();
    }

    requestNotifPermission() {
        Notification.requestPermission().then(p => {
            if(p === 'granted') document.getElementById('notifPermissionBanner').classList.remove('show');
        });
    }

    playSound() {
        if("vibrate" in navigator) navigator.vibrate(100);
        console.log("Play sound logic...");
    }

    renderAll() {
        this.renderTasks();
        this.renderCategoryManager();
        this.updateCategorySelects();
    }

    renderCategoryManager() {
        const list = document.getElementById('categoryManagerList');
        list.innerHTML = this.categories.map(c => `
            <div class="cat-manage-item">
                <span><div class="cat-color-dot" style="background:${c.color}"></div> ${c.name}</span>
                <button onclick="app.deleteCat('${c.id}')" style="background:none; border:none; color:red; cursor:pointer;">&times;</button>
            </div>
        `).join('');
    }

    deleteCat(id) {
        this.categories = this.categories.filter(c => c.id !== id);
        this.saveData('categories', this.categories);
        this.renderAll();
    }

    updateCategorySelects() {
        const sel = document.getElementById('filterCategory');
        sel.innerHTML = '<option value="all">Todas</option>' + 
            this.categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    }

    initCalendar() {
        const el = document.getElementById('calendar');
        const cal = new FullCalendar.Calendar(el, {
            initialView: 'dayGridMonth', locale: 'es',
            events: this.tasks.map(t => ({ title: t.title, start: t.date, color: '#4facfe' }))
        });
        cal.render();
        setTimeout(() => cal.updateSize(), 300);
    }
}

const app = new TaskMaster();
window.app = app;
document.getElementById('preloader').style.display='none';
