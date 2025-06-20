const translations = {
    es: { title: "🎯 TaskMaster Pro", subtitle: "Organiza tu día con inteligencia", stat_total: "Total", stat_completed: "Completadas", stat_pending: "Pendientes", stat_overdue: "Vencidas", form_title: "¿Qué necesitas hacer hoy?", label_task: "Tarea", placeholder_task: "Ej: Diseñar el nuevo logo (Atajo: N)", label_category: "Categoría", cat_work: "💼 Trabajo", cat_personal: "👤 Personal", cat_health: "🏃 Salud", cat_study: "📚 Estudio", cat_other: "📋 Otros", label_priority: "Prioridad", prio_low: "🟢 Baja", prio_medium: "🟡 Media", prio_high: "🔴 Alta", label_date: "Fecha Límite", btn_add_task: "➕ Agregar Tarea", placeholder_search: "Buscar tareas...", filter_all: "Todas las categorías", empty_state_title: "¡Todo despejado!", empty_state_text: "Agrega una nueva tarea para empezar.", title_notifications: "🔔 Notificaciones", welcome_notification: "¡Bienvenido a TaskMaster Pro! 🎉", title_pomodoro: "🍅 Pomodoro", delete_modal_title: "⚠️ Confirmar eliminación", delete_modal_text: "¿Estás seguro de que quieres eliminar esta tarea?", btn_delete: "Eliminar", btn_cancel: "Cancelar", edit_modal_title: "✏️ Editar Tarea", label_subtasks: "Sub-tareas", placeholder_subtask: "Añadir sub-tarea y presionar Enter", settings_title: "⚙️ Configuración", settings_theme: "Tema", theme_light: "Claro", theme_dark: "Oscuro", theme_ocean: "Océano", theme_forest: "Bosque", settings_language: "Idioma", settings_data: "Datos de la Aplicación", btn_export: "Exportar", btn_import: "Importar", btn_save_changes: "Guardar", btn_close: "Cerrar", feedback_imported: "¡Datos importados con éxito!", feedback_error_import: "Error al importar el archivo.", toast_task_added: "Tarea agregada con éxito", toast_task_deleted: "Tarea eliminada", toast_task_updated: "Tarea actualizada", toast_achievement_unlocked: "🏆 ¡Logro Desbloqueado!", settings_pomodoro: "Personalización de Pomodoro", pomo_work_duration: "Trabajo (min)", pomo_short_break_duration: "Descanso Corto (min)", pomo_long_break_duration: "Descanso Largo (min)", pomo_cycle_work: "¡A trabajar!", pomo_cycle_short: "Descanso corto", pomo_cycle_long: "Descanso largo", notification_title: "¡Tiempo!", notification_work_end: "¡Buen trabajo! Es hora de un descanso.", notification_break_end: "El descanso terminó. ¡De vuelta al trabajo!", label_recurrence: "Recurrencia", recur_none: "Ninguna", recur_daily: "Diaria", recur_weekly: "Semanal", pomo_task_title_prefix: "Enfocado en: ", label_notes: "Notas Adicionales", placeholder_notes: "Añade detalles, enlaces, etc.", dashboard_title: "📊 Dashboard de Productividad", dashboard_weekly_title: "Tareas Completadas (Últimos 7 Días)", dashboard_category_title: "Distribución por Categoría", dashboard_pomodoro_title: "Rendimiento de Pomodoros", day_sun: "Dom", day_mon: "Lun", day_tue: "Mar", day_wed: "Mié", day_thu: "Jue", day_fri: "Vie", day_sat: "Sáb", settings_achievements_title: "🏆 Logros", streak_days: "Días", settings_sound_theme: "Tema de Sonido", sound_classic: "Clásico", sound_digital: "Digital", sound_relaxing: "Relajante",
        ach_first_task_title: "Primer Paso", ach_first_task_desc: "Completa tu primera tarea.",
        ach_ten_tasks_title: " Imparable", ach_ten_tasks_desc: "Completa 10 tareas.",
        ach_first_pomo_title: "Maestro del Foco", ach_first_pomo_desc: "Completa un ciclo Pomodoro.",
        ach_perfectionist_title: "Perfeccionista", ach_perfectionist_desc: "Completa una tarea con sub-tareas.",
        ach_streak_3_title: "En Racha", ach_streak_3_desc: "Mantén una racha de 3 días.",
        ach_night_owl_title: "Ave Nocturna", ach_night_owl_desc: "Completa una tarea de madrugada.",
        calendar_today: "Hoy", calendar_month: "Mes", calendar_week: "Semana", calendar_list: "Lista", view_manual: "Ver Manual de Usuario"
    },
    en: { title: "🎯 TaskMaster Pro", subtitle: "Organize your day with intelligence", stat_total: "Total", stat_completed: "Completed", stat_pending: "Pending", stat_overdue: "Overdue", form_title: "What do you need to do today?", label_task: "Task", placeholder_task: "E.g.: Design the new logo (Shortcut: N)", label_category: "Category", cat_work: "💼 Work", cat_personal: "👤 Personal", cat_health: "🏃 Health", cat_study: "📚 Study", cat_other: "📋 Other", label_priority: "Priority", prio_low: "🟢 Low", prio_medium: "🟡 Medium", prio_high: "🔴 High", label_date: "Due Date", btn_add_task: "➕ Add Task", placeholder_search: "Search tasks...", filter_all: "All categories", empty_state_title: "All clear!", empty_state_text: "Add a new task to get started.", title_notifications: "🔔 Notifications", welcome_notification: "Welcome to TaskMaster Pro! 🎉", title_pomodoro: "🍅 Pomodoro", delete_modal_title: "⚠️ Confirm Deletion", delete_modal_text: "Are you sure you want to delete this task?", btn_delete: "Delete", btn_cancel: "Cancel", edit_modal_title: "✏️ Edit Task", label_subtasks: "Sub-tasks", placeholder_subtask: "Add sub-task and press Enter", settings_title: "⚙️ Settings", settings_theme: "Theme", theme_light: "Light", theme_dark: "Dark", theme_ocean: "Ocean", theme_forest: "Forest", settings_language: "Language", settings_data: "Application Data", btn_export: "Export", btn_import: "Import", btn_save_changes: "Save", btn_close: "Close", feedback_imported: "Data imported successfully!", feedback_error_import: "Error importing file.", toast_task_added: "Task added successfully", toast_task_deleted: "Task deleted", toast_task_updated: "Task updated", toast_achievement_unlocked: "🏆 Achievement Unlocked!", settings_pomodoro: "Pomodoro Customization", pomo_work_duration: "Work (min)", pomo_short_break_duration: "Short Break (min)", pomo_long_break_duration: "Long Break (min)", pomo_cycle_work: "Time to work!", pomo_cycle_short: "Short break", pomo_cycle_long: "Long break", notification_title: "Time's Up!", notification_work_end: "Good job! Time for a break.", notification_break_end: "Break's over. Back to work!", label_recurrence: "Recurrence", recur_none: "None", recur_daily: "Daily", recur_weekly: "Weekly", pomo_task_title_prefix: "Focused on: ", label_notes: "Additional Notes", placeholder_notes: "Add details, links, etc.", dashboard_title: "📊 Productivity Dashboard", dashboard_weekly_title: "Tasks Completed (Last 7 Days)", dashboard_category_title: "Distribution by Category", dashboard_pomodoro_title: "Pomodoro Performance", day_sun: "Sun", day_mon: "Mon", day_tue: "Tue", day_wed: "Wed", day_thu: "Thu", day_fri: "Fri", day_sat: "Sat", settings_achievements_title: "🏆 Achievements", streak_days: "Days", settings_sound_theme: "Sound Theme", sound_classic: "Classic", sound_digital: "Digital", sound_relaxing: "Relaxing",
        ach_first_task_title: "First Step", ach_first_task_desc: "Complete your first task.",
        ach_ten_tasks_title: "Unstoppable", ach_ten_tasks_desc: "Complete 10 tasks.",
        ach_first_pomo_title: "Focus Master", ach_first_pomo_desc: "Complete a Pomodoro cycle.",
        ach_perfectionist_title: "Perfectionist", ach_perfectionist_desc: "Complete a task with sub-tasks.",
        ach_streak_3_title: "On a Roll", ach_streak_3_desc: "Keep a 3-day streak.",
        ach_night_owl_title: "Night Owl", ach_night_owl_desc: "Complete a task in the small hours.",
        calendar_today: "Today", calendar_month: "Month", calendar_week: "Week", calendar_list: "List", view_manual: "View User Manual"
    }
};

const ACHIEVEMENT_DEFINITIONS = {
    FIRST_TASK: { id: 'ach_first_task', icon: 'fa-shoe-prints', check: (app) => app.tasks.filter(t => t.completed).length >= 1 },
    TEN_TASKS: { id: 'ach_ten_tasks', icon: 'fa-rocket', check: (app) => app.tasks.filter(t => t.completed).length >= 10 },
    FIRST_POMO: { id: 'ach_first_pomo', icon: 'fa-brain', check: (app) => app.tasks.some(t => (t.pomodorosCompleted || 0) > 0) },
    PERFECTIONIST: { id: 'ach_perfectionist', icon: 'fa-check-double', check: (app) => app.tasks.some(t => t.completed && t.subtasks.length > 0 && t.subtasks.every(st => st.completed)) },
    STREAK_3: { id: 'ach_streak_3', icon: 'fa-fire', check: (app) => app.gamificationData.streak.current >= 3 },
    NIGHT_OWL: { id: 'ach_night_owl', icon: 'fa-moon', check: (app, task) => { const hour = new Date(task.completedAt).getHours(); return hour >= 0 && hour < 4; } }
};

class TaskMaster {
    constructor() {
        this.dom = {
            tasksList: document.getElementById('tasksList'),
            searchInput: document.getElementById('searchInput'),
            filterCategory: document.getElementById('filterCategory'),
            taskFormContainer: document.getElementById('taskFormContainer'),
            statsContainer: document.getElementById('statsContainer'),
            streakCounter: document.getElementById('streakCounter'),
            pomodoroTimer: document.getElementById('pomodoroTimer'),
            pomodoroCycleTitle: document.getElementById('pomodoroCycleTitle'),
            pomodoroTaskTitle: document.getElementById('pomodoroTaskTitle'),
            welcomeNotification: document.getElementById('welcomeNotification'),
            calendarView: document.getElementById('calendar-view-section'),
            listView: document.getElementById('list-view-section'),
            listViewBtn: document.getElementById('listViewBtn'),
            calendarViewBtn: document.getElementById('calendarViewBtn'),
        };

        const defaultSettings = { theme: 'light', language: 'es', soundTheme: 'classic', pomodoro: { work: 25, short: 5, long: 15, cycles: 0 }, notificationPermission: 'default' };
        this.tasks = this.loadData('tasks', []);
        this.settings = { ...defaultSettings, ...this.loadData('settings', {}) };
        this.gamificationData = { ...{ streak: { current: 0, lastCompletedDate: null }, unlockedAchievements: [] }, ...this.loadData('gamification', {}) };
        
        this.currentPomodoroTask = null; this.pomodoroInterval = null; this.isPomodoroRunning = false;
        this.pomodoroState = { type: 'work', time: this.settings.pomodoro.work * 60 };
        this.currentEditingTask = null; this.draggedTaskElement = null;
        this.charts = {}; this.calendar = null; this.currentView = 'list';

        this.applySettings();
        this.initializeEventListeners();
        this.renderInitialUI();
    }

    loadData(key, defaultValue) { try { const data = localStorage.getItem(`taskmaster-${key}`); return data ? JSON.parse(data) : defaultValue; } catch (e) { console.error(`Error loading data for key: ${key}`, e); return defaultValue; } }
    saveData(key, data) { localStorage.setItem(`taskmaster-${key}`, JSON.stringify(data)); }
    
    applySettings() {
        document.documentElement.setAttribute('data-theme', this.settings.theme);
        document.documentElement.lang = this.settings.language;
        document.getElementById('themeSelector').value = this.settings.theme;
        document.getElementById('languageSelector').value = this.settings.language;
        document.getElementById('soundThemeSelector').value = this.settings.soundTheme;
        document.getElementById('pomodoroWork').value = this.settings.pomodoro.work;
        document.getElementById('pomodoroShortBreak').value = this.settings.pomodoro.short;
        document.getElementById('pomodoroLongBreak').value = this.settings.pomodoro.long;
        this.translateUI();
    }

    renderInitialUI() {
        this.renderTaskForm();
        this.renderFilterOptions();
        this.renderTasks();
        this.renderStats();
        this.renderStreakCounter();
        this.checkWelcomeNotification();
        this.updatePomodoroDisplay();
    }
    
    translateUI() {
        const lang = this.settings.language;
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[lang]?.[key]) el.innerHTML = translations[lang][key];
        });
        document.querySelectorAll('[data-translate-key-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-key-placeholder');
            if (translations[lang]?.[key]) el.placeholder = translations[lang][key];
        });
    }

    showToast(messageKey, type = 'success', extra = '') {
        const toast = document.getElementById('toast');
        toast.innerHTML = `${translations[this.settings.language][messageKey] || messageKey} ${extra}`;
        toast.className = `toast ${type} show`;
        if(type === 'achievement') this.playSound('achievement');
        setTimeout(() => { toast.className = 'toast'; }, 4000);
    }
    playSound(type) {
        const soundId = `${type}Sound-${this.settings.soundTheme}`;
        const sound = document.getElementById(soundId);
        if (sound) sound.play().catch(e => console.error("Error playing sound:", e));
    }
    showModal(id) { document.getElementById(id).style.display = 'block'; }
    hideModal(id) { document.getElementById(id).style.display = 'none'; }
    hideAllModals() { document.querySelectorAll('.modal-overlay').forEach(modal => modal.style.display = 'none'); }

    renderStreakCounter() {
        if (this.gamificationData.streak.current > 0) {
            this.dom.streakCounter.innerHTML = `🔥 ${this.gamificationData.streak.current} <span data-translate-key="streak_days">${translations[this.settings.language].streak_days}</span>`;
            this.dom.streakCounter.style.display = 'flex';
        } else {
            this.dom.streakCounter.style.display = 'none';
        }
    }

    renderStats() {
        const lang = this.settings.language;
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;
        const overdue = this.tasks.filter(t => !t.completed && t.date && new Date(t.date + 'T00:00:00') < new Date().setHours(0,0,0,0)).length;

        this.dom.statsContainer.innerHTML = `<div class="stat-card"><div class="stat-number">${total}</div><div class="stat-label" data-translate-key="stat_total">${translations[lang].stat_total}</div></div><div class="stat-card"><div class="stat-number">${completed}</div><div class="stat-label" data-translate-key="stat_completed">${translations[lang].stat_completed}</div></div><div class="stat-card"><div class="stat-number">${pending}</div><div class="stat-label" data-translate-key="stat_pending">${translations[lang].stat_pending}</div></div><div class="stat-card"><div class="stat-number">${overdue}</div><div class="stat-label" data-translate-key="stat_overdue">${translations[lang].stat_overdue}</div></div>`;
    }

    renderTaskForm() {
        const lang = this.settings.language;
        if(this.dom.taskFormContainer.querySelector('#taskForm')) return;
        this.dom.taskFormContainer.innerHTML = `<h2 class="section-title" data-translate-key="form_title">${translations[lang].form_title}</h2><form id="taskForm" class="task-form"><div class="form-group full-width"><label data-translate-key="label_task">${translations[lang].label_task}</label><input type="text" name="title" required placeholder="${translations[lang].placeholder_task}"></div><div class="form-row"><div class="form-group"><label data-translate-key="label_category">${translations[lang].label_category}</label><select name="category">${Object.keys(translations.es).filter(k=>k.startsWith('cat_')).map(k=>`<option value="${k.replace('cat_','')}">${translations[lang][k]}</option>`).join('')}</select></div><div class="form-group"><label data-translate-key="label_priority">${translations[lang].label_priority}</label><select name="priority">${Object.keys(translations.es).filter(k=>k.startsWith('prio_')).map(k=>`<option value="${k.replace('prio_','')}">${translations[lang][k]}</option>`).join('')}</select></div></div><div class="form-row"><div class="form-group"><label data-translate-key="label_date">${translations[lang].label_date}</label><input type="date" name="date"></div><div class="form-group"><label data-translate-key="label_recurrence">${translations[lang].label_recurrence}</label><select name="recurrence"><option value="none">${translations[lang].recur_none}</option><option value="daily">${translations[lang].recur_daily}</option><option value="weekly">${translations[lang].recur_weekly}</option></select></div></div><button type="submit" class="btn btn-primary full-width" data-translate-key="btn_add_task">${translations[lang].btn_add_task}</button></form>`;
        document.getElementById('taskForm').addEventListener('submit', this.handleAddTask.bind(this));
    }

    renderFilterOptions() {
        const lang = this.settings.language;
        const currentFilterValue = this.dom.filterCategory.value;
        const categories = ['all', ...new Set(this.tasks.map(t => t.category))];
        this.dom.filterCategory.innerHTML = categories.map(cat => `<option value="${cat}">${translations[lang][cat === 'all' ? 'filter_all' : `cat_${cat}`] || cat}</option>`).join('');
        this.dom.filterCategory.value = currentFilterValue || 'all';
    }
    
    renderTasks() {
        const lang = this.settings.language;
        const searchTerm = this.dom.searchInput.value.toLowerCase();
        const filterCat = this.dom.filterCategory.value;
        const filteredTasks = this.tasks.filter(task => (task.title.toLowerCase().includes(searchTerm) || (task.notes && task.notes.toLowerCase().includes(searchTerm))) && (filterCat === 'all' || task.category === filterCat));
        
        if (filteredTasks.length === 0) { 
            this.dom.tasksList.innerHTML = `<div class="empty-state"><i class="fa-solid fa-clipboard-check"></i><h4 data-translate-key="empty_state_title">${translations[lang].empty_state_title}</h4><p data-translate-key="empty_state_text">${translations[lang].empty_state_text}</p></div>`; 
            return; 
        }
        this.dom.tasksList.innerHTML = '';
        filteredTasks.forEach(task => this.dom.tasksList.appendChild(this.createTaskElement(task)));
    }
    
    renderOrUpdateTask(task) {
        const existingEl = this.dom.tasksList.querySelector(`[data-id="${task.id}"]`);
        const newEl = this.createTaskElement(task);
        if (existingEl) {
            existingEl.replaceWith(newEl);
        } else {
            this.dom.tasksList.prepend(newEl);
            this.checkWelcomeNotification();
        }
    }

    createTaskElement(task) {
        const taskEl = document.createElement('div');
        const lang = this.settings.language;
        const today = new Date().setHours(0, 0, 0, 0); const taskDate = task.date ? new Date(task.date+'T00:00:00').getTime() : null; let dateClass = '';
        if (!task.completed && taskDate) { if (taskDate < today) dateClass = 'task-overdue'; else if (taskDate === today) dateClass = 'task-due-today'; }
        taskEl.className = `task-item ${task.completed ? 'completed' : ''} ${this.currentPomodoroTask === task.id ? 'pomodoro-active' : ''} ${dateClass}`;
        taskEl.dataset.id = task.id; taskEl.draggable = true;
        const priorityColors = { low: 'var(--prio-low)', medium: 'var(--prio-medium)', high: 'var(--prio-high)'};
        if (!dateClass) { taskEl.style.borderLeftColor = priorityColors[task.priority] || '#cbd5e0'; }
        const subtasksDone = task.subtasks.filter(st => st.completed).length; const progress = task.subtasks.length > 0 ? (subtasksDone / task.subtasks.length) * 100 : 0;
        const recurrenceText = task.recurrence && task.recurrence !== 'none' ? `<span><i class="fa-solid fa-repeat"></i> ${translations[lang]['recur_'+task.recurrence] || ''}</span>` : '';
        const completeBtnClass = task.completed ? 'is-completed' : 'is-pending';
        const completeIcon = task.completed ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle-check';
        taskEl.innerHTML = `<div class="task-header"><div class="task-info"><h4 class="task-title">${task.title}</h4><div class="task-meta">${task.notes ? '<span><i class="fa-solid fa-note-sticky"></i></span>' : ''}<span><i class="fa-solid fa-tag"></i> ${translations[lang]['cat_'+task.category] || task.category}</span>${task.date ? `<span><i class="fa-solid fa-calendar-days"></i> ${new Date(task.date + 'T00:00:00').toLocaleDateString(lang)}</span>` : ''}${recurrenceText}</div></div><div class="task-actions"><button class="btn-icon pomodoro-start-btn" title="Iniciar Pomodoro" aria-label="Iniciar Pomodoro para esta tarea"><i class="fa-solid fa-clock"></i></button><button class="btn-icon edit-btn" title="Editar" aria-label="Editar esta tarea"><i class="fa-solid fa-pencil"></i></button><button class="btn-icon delete-btn" title="Eliminar" aria-label="Eliminar esta tarea"><i class="fa-solid fa-trash-can"></i></button><button class="btn-icon complete-btn ${completeBtnClass}" title="Completar" aria-label="Marcar esta tarea como completada"><i class="${completeIcon}"></i></button></div></div>${task.subtasks.length > 0 ? `<div class="task-progress"><div class="progress-bar" style="width: ${progress}%"></div></div>` : ''}`;
        return taskEl;
    }

    checkWelcomeNotification() { this.dom.welcomeNotification.style.display = this.tasks.length > 0 ? 'none' : 'block'; }
    
    initializeEventListeners() {
        document.addEventListener('keydown', this.handleKeyboardShortcuts.bind(this));
        this.dom.searchInput.addEventListener('input', () => this.renderTasks());
        this.dom.filterCategory.addEventListener('change', () => this.renderTasks());
        
        this.dom.listViewBtn.addEventListener('click', () => this.toggleView('list'));
        this.dom.calendarViewBtn.addEventListener('click', () => this.toggleView('calendar'));
        document.getElementById('dashboardBtn').addEventListener('click', () => this.showDashboard());
        document.getElementById('settingsBtn').addEventListener('click', () => { this.renderAchievements(); this.showModal('settingsModal'); });
        
        document.getElementById('closeDashboard').addEventListener('click', () => this.hideModal('dashboardModal'));
        document.getElementById('closeSettings').addEventListener('click', () => { this.hideModal('settingsModal'); this.applySettings(); this.renderInitialUI(); });
        
        document.getElementById('themeSelector').addEventListener('change', (e) => { this.settings.theme = e.target.value; this.saveData('settings', this.settings); this.applySettings(); });
        document.getElementById('languageSelector').addEventListener('change', (e) => { this.settings.language = e.target.value; this.saveData('settings', this.settings); this.applySettings(); if(this.calendar) {this.calendar.setOption('locale', e.target.value); this.calendar.setOption('buttonText', this.getCalendarButtonTranslations());} this.renderInitialUI(); });
        document.getElementById('soundThemeSelector').addEventListener('change', (e) => { this.settings.soundTheme = e.target.value; this.saveData('settings', this.settings); this.playSound('notification'); });

        document.getElementById('exportBtn').addEventListener('click', this.exportData.bind(this));
        document.getElementById('importFile').addEventListener('change', this.importData.bind(this));
        
        document.getElementById('playBtn').addEventListener('click', () => this.startPomodoro()); document.getElementById('pauseBtn').addEventListener('click', () => this.pausePomodoro()); document.getElementById('resetBtn').addEventListener('click', () => this.resetPomodoro(true)); document.getElementById('skipBtn').addEventListener('click', () => this.nextPomodoroCycle(true));
        document.getElementById('pomodoroWork').addEventListener('change', (e) => this.updatePomodoroSetting('work', e.target.value)); document.getElementById('pomodoroShortBreak').addEventListener('change', (e) => this.updatePomodoroSetting('short', e.target.value)); document.getElementById('pomodoroLongBreak').addEventListener('change', (e) => this.updatePomodoroSetting('long', e.target.value));
        
        this.dom.tasksList.addEventListener('click', this.handleTaskListClick.bind(this)); this.dom.tasksList.addEventListener('dragstart', this.handleDragStart.bind(this)); this.dom.tasksList.addEventListener('dragover', this.handleDragOver.bind(this)); this.dom.tasksList.addEventListener('drop', this.handleDrop.bind(this));
        
        document.getElementById('cancelDelete').addEventListener('click', () => this.hideModal('deleteModal')); document.getElementById('cancelEdit').addEventListener('click', () => this.hideModal('editTaskModal')); document.getElementById('saveEdit').addEventListener('click', () => this.saveEditedTask());
        document.getElementById('newSubtaskInput').addEventListener('keypress', (e) => { if(e.key === 'Enter') { e.preventDefault(); this.addSubtask(); }});
        document.getElementById('editSubtaskList').addEventListener('click', (e) => { if(e.target.closest('.delete-subtask-btn')) this.deleteSubtask(e.target.closest('.delete-subtask-btn').dataset.subtaskId); });
    }
    
    handleKeyboardShortcuts(e) {
        if (document.querySelector('.modal-overlay[style*="display: block"]') || document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.tagName === 'SELECT') { if (e.key === 'Escape') this.hideAllModals(); return; }
        switch(e.key.toLowerCase()) {
            case 'n': e.preventDefault(); document.querySelector('#taskFormContainer input[name="title"]').focus(); break;
            case 'f': e.preventDefault(); this.dom.searchInput.focus(); break;
            case 'd': e.preventDefault(); this.showDashboard(); break;
            case 's': e.preventDefault(); this.renderAchievements(); this.showModal('settingsModal'); break;
            case 'c': e.preventDefault(); this.toggleView('calendar'); break;
            case 'l': e.preventDefault(); this.toggleView('list'); break;
            case 'escape': this.hideAllModals(); break;
        }
    }

    handleTaskListClick(e) { const taskEl = e.target.closest('.task-item'); if(!taskEl) return; const taskId = taskEl.dataset.id; if(e.target.closest('.delete-btn')) this.showDeleteModal(taskId); else if(e.target.closest('.complete-btn')) this.toggleTaskCompletion(taskId); else if(e.target.closest('.edit-btn')) this.showEditModal(taskId); else if(e.target.closest('.pomodoro-start-btn')) { if (this.settings.notificationPermission === 'default') this.requestNotificationPermission(); this.startPomodoroForTask(taskId); } }
    
    handleAddTask(e) {
        e.preventDefault(); const form = e.target; const formData = new FormData(form); const title = formData.get('title').trim(); if (!title) return;
        const newTask = { id: `task-${Date.now()}`, title, category: formData.get('category'), priority: formData.get('priority'), recurrence: formData.get('recurrence'), date: formData.get('date') || null, completed: false, completedAt: null, pomodorosCompleted: 0, subtasks: [], notes: '' };
        this.tasks.unshift(newTask);
        this.saveData('tasks', this.tasks); 
        this.dom.filterCategory.value = 'all';

        if (this.dom.tasksList.querySelector('.empty-state')) {
            this.dom.tasksList.innerHTML = '';
        }
        
        this.renderOrUpdateTask(newTask);
        this.renderStats();
        this.renderFilterOptions();
        
        if(this.calendar && newTask.date) { this.calendar.addEvent(this.taskToCalendarEvent(newTask)); } 

        form.reset(); 
        this.showToast('toast_task_added'); 
        this.checkAchievements();
    }
    
    toggleTaskCompletion(taskId) {
        const task = this.tasks.find(t => t.id === taskId); if(!task) return;
        const wasCompleted = task.completed; task.completed = !task.completed; task.completedAt = task.completed ? Date.now() : null;
        
        this.renderOrUpdateTask(task);
        if (task.completed && !wasCompleted) { this.updateStreak(); this.checkAchievements(task); }
        
        if (task.completed && task.recurrence !== 'none' && task.date) { 
            const newRecurringTask = { ...task, id: `task-${Date.now()}`, completed: false, completedAt: null, subtasks: task.subtasks.map(st => ({...st, completed: false})) }; 
            const newDate = new Date(task.date + 'T00:00:00'); 
            if(task.recurrence === 'daily') newDate.setDate(newDate.getDate() + 1); 
            if(task.recurrence === 'weekly') newDate.setDate(newDate.getDate() + 7); 
            newRecurringTask.date = newDate.toISOString().split('T')[0]; 
            this.tasks.push(newRecurringTask); 
            this.tasks.sort((a,b) => new Date(b.date) - new Date(a.date));
            this.renderOrUpdateTask(newRecurringTask);
            if(this.calendar) this.calendar.addEvent(this.taskToCalendarEvent(newRecurringTask));
        }
        
        this.saveData('tasks', this.tasks); 
        this.renderStats();
        if(this.calendar) {
            const event = this.calendar.getEventById(taskId);
            if (event) event.setProp('backgroundColor', task.completed ? '#a0aec0' : this.getPriorityColor(task.priority));
        }
        this.showToast('toast_task_updated');
    }
    
    showDeleteModal(taskId) { const lang = this.settings.language; const modal = document.getElementById('deleteModal'); modal.querySelector('h3').textContent = translations[lang].delete_modal_title; modal.querySelector('p').textContent = translations[lang].delete_modal_text; modal.querySelector('#cancelDelete').textContent = translations[lang].btn_cancel; modal.querySelector('#confirmDelete').textContent = translations[lang].btn_delete; this.showModal('deleteModal'); document.getElementById('confirmDelete').onclick = () => { this.deleteTask(taskId); }; }
    
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(t => t.id !== taskId);
        if (this.currentPomodoroTask === taskId) this.resetPomodoro(true);
        this.saveData('tasks', this.tasks);
        
        const taskEl = this.dom.tasksList.querySelector(`[data-id="${taskId}"]`);
        if (taskEl) taskEl.remove();
        
        if (this.tasks.length === 0) this.renderTasks(); // Show empty state
        
        this.renderStats();
        this.renderFilterOptions();
        
        if (this.calendar) {
            const event = this.calendar.getEventById(taskId);
            if (event) event.remove();
        }
        
        this.hideModal('deleteModal');
        this.showToast('toast_task_deleted', 'error');
    }

    showEditModal(taskId) { this.currentEditingTask = this.tasks.find(t => t.id === taskId); if (!this.currentEditingTask) return; const lang = this.settings.language; const modal = document.getElementById('editTaskModal'); modal.querySelector('h3').textContent = translations[lang].edit_modal_title; modal.querySelector('label[data-translate-key="label_task"]').textContent = translations[lang].label_task; modal.querySelector('label[data-translate-key="label_notes"]').textContent = translations[lang].label_notes; modal.querySelector('label[data-translate-key="label_subtasks"]').textContent = translations[lang].label_subtasks; modal.querySelector('#newSubtaskInput').placeholder = translations[lang].placeholder_subtask; modal.querySelector('#editTaskNotes').placeholder = translations[lang].placeholder_notes; modal.querySelector('#cancelEdit').textContent = translations[lang].btn_cancel; modal.querySelector('#saveEdit').textContent = translations[lang].btn_save_changes; document.getElementById('editTaskTitle').value = this.currentEditingTask.title; document.getElementById('editTaskNotes').value = this.currentEditingTask.notes || ''; this.renderSubtasks(); this.showModal('editTaskModal'); }
    
    saveEditedTask() { 
        if (!this.currentEditingTask) return; 
        this.currentEditingTask.title = document.getElementById('editTaskTitle').value.trim(); 
        this.currentEditingTask.notes = document.getElementById('editTaskNotes').value.trim(); 
        this.saveData('tasks', this.tasks); 
        
        this.renderOrUpdateTask(this.currentEditingTask);
        if (this.calendar) {
            const event = this.calendar.getEventById(this.currentEditingTask.id);
            if (event) {
                event.setProp('title', this.currentEditingTask.title);
            }
        }
        
        this.hideModal('editTaskModal'); 
        this.showToast('toast_task_updated'); 
        this.currentEditingTask = null; 
    }

    renderSubtasks() { const list = document.getElementById('editSubtaskList'); list.innerHTML = this.currentEditingTask.subtasks.map(subtask => `<div class="subtask-item" data-subtask-id="${subtask.id}"><label class="${subtask.completed ? 'completed' : ''}"><input type="checkbox" ${subtask.completed ? 'checked' : ''} onchange="window.app.toggleSubtask('${subtask.id}')"><span>${subtask.title}</span></label><button class="btn-icon delete-subtask-btn" data-subtask-id="${subtask.id}" aria-label="Eliminar sub-tarea"><i class="fa-solid fa-times"></i></button></div>`).join(''); }
    addSubtask() { const input = document.getElementById('newSubtaskInput'); const title = input.value.trim(); if (title && this.currentEditingTask) { this.currentEditingTask.subtasks.push({ id: `sub-${Date.now()}`, title, completed: false }); input.value = ''; this.renderSubtasks(); } }
    toggleSubtask(subtaskId) { const subtask = this.currentEditingTask.subtasks.find(st => st.id === subtaskId); if (subtask) subtask.completed = !subtask.completed; this.renderSubtasks(); }
    deleteSubtask(subtaskId) { this.currentEditingTask.subtasks = this.currentEditingTask.subtasks.filter(st => st.id !== subtaskId); this.renderSubtasks(); }
    
    handleDragStart(e) { if(e.target.classList.contains('task-item')) { this.draggedTaskElement = e.target; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', e.target.dataset.id); setTimeout(() => { e.target.classList.add('dragging'); }, 0); } }
    handleDragOver(e) { e.preventDefault(); }
    handleDrop(e) { e.preventDefault(); const draggedId = e.dataTransfer.getData('text/plain'); if (!draggedId || !this.draggedTaskElement) return; const dropTarget = e.target.closest('.task-item'); this.draggedTaskElement.classList.remove('dragging'); if (dropTarget && dropTarget.dataset.id !== draggedId) { const draggedIndex = this.tasks.findIndex(t => t.id === draggedId); const targetIndex = this.tasks.findIndex(t => t.id === dropTarget.dataset.id); const [draggedItem] = this.tasks.splice(draggedIndex, 1); this.tasks.splice(targetIndex, 0, draggedItem); this.saveData('tasks', this.tasks); this.renderTasks(); } }

    updateStreak() { const today = new Date().toISOString().split('T')[0]; const lastDate = this.gamificationData.streak.lastCompletedDate; if (today === lastDate) return; const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1); const yesterdayStr = yesterday.toISOString().split('T')[0]; if (lastDate === yesterdayStr) { this.gamificationData.streak.current++; } else { this.gamificationData.streak.current = 1; } this.gamificationData.streak.lastCompletedDate = today; this.saveData('gamification', this.gamificationData); this.renderStreakCounter(); }
    checkAchievements(task = null) { const lang = this.settings.language; for (const key in ACHIEVEMENT_DEFINITIONS) { const ach = ACHIEVEMENT_DEFINITIONS[key]; if (!this.gamificationData.unlockedAchievements.includes(ach.id) && ach.check(this, task)) { this.gamificationData.unlockedAchievements.push(ach.id); this.saveData('gamification', this.gamificationData); this.showToast('toast_achievement_unlocked', 'achievement', translations[lang][`${ach.id}_title`]); } } }
    renderAchievements() { const grid = document.getElementById('achievementsGrid'); const lang = this.settings.language; grid.innerHTML = Object.values(ACHIEVEMENT_DEFINITIONS).map(ach => { const unlocked = this.gamificationData.unlockedAchievements.includes(ach.id); return `<div class="achievement-item ${unlocked ? 'unlocked' : ''}" title="${translations[lang][`${ach.id}_desc`]}"><i class="fa-solid ${ach.icon} achievement-icon"></i><span class="ach-title">${translations[lang][`${ach.id}_title`]}</span></div>`; }).join(''); }
    
    finishPomodoroCycle() {
        this.playSound('notification');
        this.dom.pomodoroTimer.classList.add('finished');
        if(this.pomodoroState.type === 'work' && this.currentPomodoroTask) { const task = this.tasks.find(t => t.id === this.currentPomodoroTask); if(task) { task.pomodorosCompleted = (task.pomodorosCompleted || 0) + 1; this.saveData('tasks', this.tasks); this.checkAchievements(); this.renderStats(); } }
        const lang = this.settings.language; this.showPushNotification(translations[lang].notification_title, this.pomodoroState.type === 'work' ? translations[lang].notification_work_end : translations[lang].notification_break_end);
        setTimeout(() => { this.dom.pomodoroTimer.classList.remove('finished'); this.nextPomodoroCycle(false); }, 3000);
    }
    updatePomodoroSetting(key, value) { this.settings.pomodoro[key] = parseInt(value, 10); this.saveData('settings', this.settings); if(!this.isPomodoroRunning) this.resetPomodoro(false); this.showToast('toast_task_updated'); }
    startPomodoroForTask(taskId) { this.currentPomodoroTask = taskId; this.resetPomodoro(false); this.startPomodoro(); this.renderTasks(); }
    startPomodoro() { if (this.isPomodoroRunning) return; this.isPomodoroRunning = true; document.body.classList.add('focus-mode'); this.pomodoroInterval = setInterval(() => { this.pomodoroState.time--; this.updatePomodoroDisplay(); if (this.pomodoroState.time < 0) this.finishPomodoroCycle(); }, 1000); }
    pausePomodoro() { clearInterval(this.pomodoroInterval); this.isPomodoroRunning = false; document.body.classList.remove('focus-mode'); }
    resetPomodoro(fullReset) { this.pausePomodoro(); if (fullReset) { this.settings.pomodoro.cycles = 0; this.currentPomodoroTask = null; } this.pomodoroState = { type: 'work', time: this.settings.pomodoro.work * 60 }; this.updatePomodoroDisplay(); if (fullReset) this.renderTasks(); }
    nextPomodoroCycle(isSkip) { this.pausePomodoro(); if (this.pomodoroState.type === 'work') { this.settings.pomodoro.cycles++; this.pomodoroState = { type: (this.settings.pomodoro.cycles % 4 === 0 ? 'long' : 'short'), time: this.settings.pomodoro[(this.settings.pomodoro.cycles % 4 === 0 ? 'long' : 'short')] * 60 }; } else { this.pomodoroState = { type: 'work', time: this.settings.pomodoro.work * 60 }; } this.saveData('settings', this.settings); this.updatePomodoroDisplay(); if (!isSkip) this.startPomodoro(); }
    updatePomodoroDisplay() { const { time, type } = this.pomodoroState; this.dom.pomodoroTimer.textContent = `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`; const lang = this.settings.language; this.dom.pomodoroCycleTitle.textContent = translations[lang][`pomo_cycle_${type === 'short' ? 'short' : type === 'long' ? 'long' : 'work'}`]; if(this.currentPomodoroTask){ const task = this.tasks.find(t => t.id === this.currentPomodoroTask); this.dom.pomodoroTaskTitle.textContent = task ? `${translations[lang].pomo_task_title_prefix}${task.title}` : ''; } else { this.dom.pomodoroTaskTitle.textContent = ''; } }
    
    toggleView(view) {
        if (this.currentView === view) return; this.currentView = view;
        if (view === 'calendar') { this.dom.listView.classList.add('view-hidden'); this.dom.calendarView.classList.remove('view-hidden'); this.dom.listViewBtn.classList.remove('active'); this.dom.calendarViewBtn.classList.add('active'); this.initializeCalendar(); } 
        else { this.dom.listView.classList.remove('view-hidden'); this.dom.calendarView.classList.add('view-hidden'); this.dom.listViewBtn.classList.add('active'); this.dom.calendarViewBtn.classList.remove('active'); }
    }

    getCalendarButtonTranslations() { const lang = this.settings.language; return { today: translations[lang].calendar_today, month: translations[lang].calendar_month, week: translations[lang].calendar_week, list: translations[lang].calendar_list }; }
    
    getPriorityColor(priority) { return { low: 'var(--prio-low)', medium: 'var(--prio-medium)', high: 'var(--prio-high)'}[priority] || 'var(--accent-color)'; }

    taskToCalendarEvent(task) { return { id: task.id, title: task.title, start: task.date, color: this.getPriorityColor(task.priority), allDay: true }; }

    initializeCalendar() {
        if (this.calendar) { this.calendar.refetchEvents(); return; }
        const calendarEl = document.getElementById('calendar');
        this.calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth', locale: this.settings.language, buttonText: this.getCalendarButtonTranslations(),
            headerToolbar: { left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,listWeek' },
            events: this.tasks.filter(t => t.date).map(t => this.taskToCalendarEvent(t))
        });
        this.calendar.render();
    }

    showDashboard() { this.showModal('dashboardModal'); setTimeout(() => { this.renderWeeklyChart(); this.renderCategoryChart(); this.renderPomodoroChart(); }, 100); }
    renderChart(canvasId, type, data, options = {}) { if (this.charts[canvasId]) { this.charts[canvasId].destroy(); } const ctx = document.getElementById(canvasId); if (!ctx) return; this.charts[canvasId] = new Chart(ctx.getContext('2d'), { type, data, options }); }
    renderWeeklyChart() { const lang = this.settings.language; const labels = []; const data = [0, 0, 0, 0, 0, 0, 0]; const dayKeys = ['day_sun', 'day_mon', 'day_tue', 'day_wed', 'day_thu', 'day_fri', 'day_sat']; for (let i = 6; i >= 0; i--) { const date = new Date(); date.setDate(date.getDate() - i); labels.push(translations[lang][dayKeys[date.getDay()]]); } const sevenDaysAgo = new Date(); sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); this.tasks.filter(t => t.completed && t.completedAt && new Date(t.completedAt) > sevenDaysAgo).forEach(task => { const completedDate = new Date(task.completedAt); const diffDays = Math.floor((new Date().setHours(0,0,0,0) - completedDate.setHours(0,0,0,0)) / (1000 * 60 * 60 * 24)); if(diffDays >= 0 && diffDays < 7) { data[6 - diffDays]++; } }); this.renderChart('completedTasksChart', 'bar', { labels, datasets: [{ label: translations[lang].stat_completed, data, backgroundColor: 'rgba(79, 172, 254, 0.5)', borderColor: 'rgba(79, 172, 254, 1)', borderWidth: 1 }] }, { responsive: true, scales: { y: { beginAtZero: true, ticks: { stepSize: 1, color: getComputedStyle(document.body).getPropertyValue('--text-muted') } }, x: { ticks: { color: getComputedStyle(document.body).getPropertyValue('--text-muted') } } }, plugins: { legend: { labels: { color: getComputedStyle(document.body).getPropertyValue('--text-muted') } } } }); }
    renderCategoryChart() { const lang = this.settings.language; const categoryCounts = this.tasks.reduce((acc, task) => { acc[task.category] = (acc[task.category] || 0) + 1; return acc; }, {}); const labels = Object.keys(categoryCounts).map(cat => translations[lang]['cat_' + cat] || cat); const data = Object.values(categoryCounts); this.renderChart('categoryDistributionChart', 'doughnut', { labels, datasets: [{ data, backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'], }] }, { responsive: true, plugins: { legend: { position: 'top', labels: { color: getComputedStyle(document.body).getPropertyValue('--text-muted') } } } }); }
    renderPomodoroChart() { const lang = this.settings.language; const pomodoroTasks = this.tasks.filter(t => (t.pomodorosCompleted || 0) > 0).sort((a,b) => b.pomodorosCompleted - a.pomodorosCompleted).slice(0, 7); const labels = pomodoroTasks.map(t => t.title.length > 25 ? t.title.substring(0, 22) + '...' : t.title); const data = pomodoroTasks.map(t => t.pomodorosCompleted); this.renderChart('pomodoroPerformanceChart', 'bar', { labels, datasets: [{ label: 'Pomodoros', data, backgroundColor: 'rgba(255, 159, 64, 0.5)', borderColor: 'rgba(255, 159, 64, 1)', borderWidth: 1 }] }, { responsive: true, indexAxis: 'y', scales: { y: { ticks: { color: getComputedStyle(document.body).getPropertyValue('--text-muted') } }, x: { ticks: { stepSize: 1, color: getComputedStyle(document.body).getPropertyValue('--text-muted') } } }, plugins: { legend: { labels: { color: getComputedStyle(document.body).getPropertyValue('--text-muted') } } } }); }
    
    async requestNotificationPermission() { this.settings.notificationPermission = await Notification.requestPermission(); this.saveData('settings', this.settings); }
    showPushNotification(title, body) { if (this.settings.notificationPermission === 'granted') { new Notification(title, { body: body, icon: './icons/android-launchericon-192-192.png' }); }}
    exportData() { const data = JSON.stringify({ tasks: this.tasks, settings: this.settings, gamification: this.gamificationData }); const blob = new Blob([data], {type: 'application/json'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `taskmaster_backup_${new Date().toISOString().split('T')[0]}.json`; a.click(); URL.revokeObjectURL(url); }
    importData(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = (e) => { try { const data = JSON.parse(e.target.result); if (data.tasks && data.settings) { this.tasks = data.tasks || []; this.settings = data.settings || {}; this.gamificationData = data.gamification || { streak: { current: 0, lastCompletedDate: null }, unlockedAchievements: [] }; this.saveData('tasks', this.tasks); this.saveData('settings', this.settings); this.saveData('gamification', this.gamificationData); this.applySettings(); this.renderInitialUI(); this.showToast('feedback_imported'); } else { throw new Error('Invalid file format'); } } catch (error) { this.showToast('feedback_error_import', 'error'); console.error(error); } }; reader.readAsText(file); }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
    window.app = new TaskMaster();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js').then(reg => console.log('Service Worker: Registered')).catch(err => console.error('Service Worker: Registration failed', err));
    }
});
