// main.js - VERSIÓN CON LÓGICA DE RECURRENCIA AVANZADA
const translations = {
    es: { title: "🎯 TaskMaster Pro", subtitle: "Organiza tu día con inteligencia", stat_total: "Total", stat_completed: "Completadas", stat_pending: "Pendientes", stat_overdue: "Vencidas", form_title: "¿Qué necesitas hacer hoy?", label_task: "Tarea", placeholder_task: "Ej: Diseñar el nuevo logo (Atajo: N)", label_category: "Categoría", cat_work: "💼 Trabajo", cat_personal: "👤 Personal", cat_health: "🏃 Salud", cat_study: "📚 Estudio", cat_other: "📋 Otros", label_priority: "Prioridad", prio_low: "🟢 Baja", prio_medium: "🟡 Media", prio_high: "🔴 Alta", label_date: "Fecha Límite", label_time: "Hora", btn_add_task: "➕ Agregar Tarea", placeholder_search: "Buscar tareas...", filter_all: "Todas las categorías", empty_state_title: "¡Todo despejado!", empty_state_text: "Añade una nueva tarea para empezar.", empty_search_title: "Sin resultados", empty_search_text: "No se encontraron tareas con ese filtro.", title_notifications: "🔔 Notificaciones", welcome_notification: "¡Bienvenido! Define tu primera tarea.", title_pomodoro: "🍅 Pomodoro", delete_modal_title: "⚠️ Confirmar eliminación", delete_modal_text: "¿Estás seguro de que quieres eliminar esta tarea?", btn_delete: "Eliminar", btn_cancel: "Cancelar", btn_reset: "Restaurar", edit_modal_title: "✏️ Editar Tarea", label_subtasks: "Sub-tareas", placeholder_subtask: "Añadir sub-tarea y presionar Enter", settings_title: "⚙️ Configuración", settings_theme: "Tema", theme_light: "Claro", theme_dark: "Oscuro", theme_ocean: "Océano", theme_forest: "Bosque", settings_language: "Idioma", settings_data: "Datos", btn_export: "Exportar", btn_import: "Importar", btn_save_changes: "Guardar", btn_close: "Cerrar", feedback_imported: "¡Datos importados con éxito!", feedback_error_import: "Error al importar el archivo.", toast_task_added: "Tarea agregada con éxito", toast_task_deleted: "Tarea eliminada", toast_task_updated: "Tarea actualizada", toast_task_rescheduled: "Tarea reprogramada", toast_achievement_unlocked: "🏆 ¡Logro Desbloqueado!", settings_pomodoro: "Pomodoro", pomo_work_duration: "Trabajo (min)", pomo_short_break_duration: "Descanso Corto (min)", pomo_long_break_duration: "Descanso Largo (min)", pomo_cycle_work: "¡A trabajar!", pomo_cycle_short: "Descanso corto", pomo_cycle_long: "Descanso largo", notification_title: "¡Tiempo!", notification_work_end: "¡Buen trabajo! Es hora de un descanso.", notification_break_end: "El descanso terminó. ¡De vuelta al trabajo!", label_recurrence: "Recurrencia", recur_none: "Ninguna", recur_daily: "Diaria", recur_weekly: "Semanal", recur_fortnightly: "Quincenal (15 y 30)", recur_monthly: "Mensual", recur_business_days: "Días Hábiles (L-V)", pomo_task_title_prefix: "Enfocado en: ", label_notes: "Notas Adicionales", placeholder_notes: "Añade detalles, enlaces, etc.", dashboard_title: "📊 Dashboard de Productividad", dashboard_weekly_title: "Tareas Completadas (Últimos 7 Días)", dashboard_category_title: "Distribución por Categoría", dashboard_pomodoro_title: "Rendimiento de Pomodoros", dashboard_monthly_title: "Tareas Completadas (Últimos 30 Días)", day_sun: "Dom", day_mon: "Lun", day_tue: "Mar", day_wed: "Mié", day_thu: "Jue", day_fri: "Vie", day_sat: "Sáb", settings_achievements_title: "Logros", streak_days: "Días", settings_sound_theme: "Tema de Sonido", sound_classic: "Clásico", sound_digital: "Digital", sound_relaxing: "Relajante",
        settings_ui_customization: "Personalización de Interfaz", settings_font: "Fuente", font_sans_serif: "Moderna (Sans-Serif)", font_serif: "Clásica (Serif)", font_mono: "Técnica (Monoespaciada)", settings_accent_color: "Color de Acento", settings_general: "Configuración General",
        stats_title: "🏆 Metas y Estadísticas", stats_goals_title: "Metas Diarias", stats_daily_task_goal: "Meta de Tareas", stats_daily_pomo_goal: "Meta de Pomodoros", stats_details_title: "Estadísticas Detalladas", stat_streak: "Racha Actual", stat_today_tasks: "Tareas Hoy", stat_today_pomos: "Pomodoros Hoy", stat_avg_focus: "Foco Promedio", stat_top_category: "Categoría Top",
        notif_overdue: "Tienes {count} tarea(s) vencida(s).", notif_due_today: "Tienes {count} tarea(s) para hoy.", notif_due_tomorrow: "Hay {count} tarea(s) para mañana.", notif_all_clear: "¡Todo en orden! Sigue así. 👍", notif_streak: "¡Sigue así! Llevas una racha de {count} día(s).", notif_achievement: "¡Último logro: {achievement}!", notif_due_now: "¡Es la hora de tu tarea: {taskTitle}!",
        ach_first_task_title: "Primer Paso", ach_first_task_desc: "Completa tu primera tarea.", ach_ten_tasks_title: "Imparable", ach_ten_tasks_desc: "Completa 10 tareas.", ach_first_pomo_title: "Maestro del Foco", ach_first_pomo_desc: "Completa un ciclo Pomodoro.", ach_perfectionist_title: "Perfeccionista", ach_perfectionist_desc: "Completa una tarea con sub-tareas.", ach_streak_3_title: "En Racha", ach_streak_3_desc: "Mantén una racha de 3 días.", ach_night_owl_title: "Ave Nocturna", ach_night_owl_desc: "Completa una tarea de madrugada.",
        calendar_today: "Hoy", calendar_month: "Mes", calendar_week: "Semana", calendar_list: "Lista"
    },
    en: { title: "🎯 TaskMaster Pro", subtitle: "Organize your day with intelligence", stat_total: "Total", stat_completed: "Completed", stat_pending: "Pending", stat_overdue: "Overdue", form_title: "What do you need to do today?", label_task: "Task", placeholder_task: "e.g., Design the new logo (Shortcut: N)", label_category: "Category", cat_work: "💼 Work", cat_personal: "👤 Personal", cat_health: "🏃 Health", cat_study: "📚 Study", cat_other: "📋 Other", label_priority: "Priority", prio_low: "🟢 Low", prio_medium: "🟡 Medium", prio_high: "🔴 High", label_date: "Due Date", label_time: "Time", btn_add_task: "➕ Add Task", placeholder_search: "Search tasks...", filter_all: "All categories", empty_state_title: "All clear!", empty_state_text: "Add a new task to get started.", empty_search_title: "No results", empty_search_text: "No tasks were found with that filter.", title_notifications: "🔔 Notifications", welcome_notification: "Welcome! Define your first task.", title_pomodoro: "🍅 Pomodoro", delete_modal_title: "⚠️ Confirm deletion", delete_modal_text: "Are you sure you want to delete this task?", btn_delete: "Delete", btn_cancel: "Cancel", btn_reset: "Reset", edit_modal_title: "✏️ Edit Task", label_subtasks: "Sub-tasks", placeholder_subtask: "Add sub-task and press Enter", settings_title: "⚙️ Settings", settings_theme: "Theme", theme_light: "Light", theme_dark: "Dark", theme_ocean: "Ocean", theme_forest: "Forest", settings_language: "Language", settings_data: "Data", btn_export: "Export", btn_import: "Import", btn_save_changes: "Save", btn_close: "Close", feedback_imported: "Data imported successfully!", feedback_error_import: "Error importing the file.", toast_task_added: "Task added successfully", toast_task_deleted: "Task deleted", toast_task_updated: "Task updated", toast_task_rescheduled: "Task rescheduled", toast_achievement_unlocked: "🏆 Achievement Unlocked!", settings_pomodoro: "Pomodoro", pomo_work_duration: "Work (min)", pomo_short_break_duration: "Short Break (min)", pomo_long_break_duration: "Long Break (min)", pomo_cycle_work: "Time to work!", pomo_cycle_short: "Short break", pomo_cycle_long: "Long break", notification_title: "Time's up!", notification_work_end: "Good job! It's time for a break.", notification_break_end: "Break is over. Back to work!", label_recurrence: "Recurrence", recur_none: "None", recur_daily: "Daily", recur_weekly: "Weekly", recur_fortnightly: "Fortnightly (15th & 30th)", recur_monthly: "Monthly", recur_business_days: "Business Days (Mon-Fri)", pomo_task_title_prefix: "Focused on: ", label_notes: "Additional Notes", placeholder_notes: "Add details, links, etc.", dashboard_title: "📊 Productivity Dashboard", dashboard_weekly_title: "Completed Tasks (Last 7 Days)", dashboard_category_title: "Distribution by Category", dashboard_pomodoro_title: "Pomodoro Performance", dashboard_monthly_title: "Completed Tasks (Last 30 Days)", day_sun: "Sun", day_mon: "Mon", day_tue: "Tue", day_wed: "Wed", day_thu: "Thu", day_fri: "Fri", day_sat: "Sat", settings_achievements_title: "Achievements", streak_days: "Days", settings_sound_theme: "Sound Theme", sound_classic: "Classic", sound_digital: "Digital", sound_relaxing: "Relaxing",
        settings_ui_customization: "UI Customization", settings_font: "Font", font_sans_serif: "Modern (Sans-Serif)", font_serif: "Classic (Serif)", font_mono: "Technical (Monospace)", settings_accent_color: "Accent Color", settings_general: "General Settings",
        stats_title: "🏆 Goals & Statistics", stats_goals_title: "Daily Goals", stats_daily_task_goal: "Task Goal", stats_daily_pomo_goal: "Pomodoro Goal", stats_details_title: "Detailed Statistics", stat_streak: "Current Streak", stat_today_tasks: "Tasks Today", stat_today_pomos: "Pomos Today", stat_avg_focus: "Avg. Focus", stat_top_category: "Top Category",
        notif_overdue: "You have {count} overdue task(s).", notif_due_today: "You have {count} task(s) for today.", notif_due_tomorrow: "There are {count} task(s) for tomorrow.", notif_all_clear: "All in order! Keep it up. 👍", notif_streak: "Keep it up! You're on a {count} day streak.", notif_achievement: "Last achievement: {achievement}!", notif_due_now: "It's time for your task: {taskTitle}!",
        ach_first_task_title: "First Step", ach_first_task_desc: "Complete your first task.", ach_ten_tasks_title: "Unstoppable", ach_ten_tasks_desc: "Complete 10 tasks.", ach_first_pomo_title: "Focus Master", ach_first_pomo_desc: "Complete a Pomodoro cycle.", ach_perfectionist_title: "Perfectionist", ach_perfectionist_desc: "Complete a task with sub-tasks.", ach_streak_3_title: "On a Roll", ach_streak_3_desc: "Maintain a 3-day streak.", ach_night_owl_title: "Night Owl", ach_night_owl_desc: "Complete a task in the early hours.",
        calendar_today: "Today", calendar_month: "Month", calendar_week: "Week", calendar_list: "List"
    }
};

const SVGs = {
    noTasks: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="var(--accent-color)" d="M96.4 34.4H75.5V23.3c0-2.3-1.9-4.2-4.2-4.2h-14c-2.3 0-4.2 1.9-4.2 4.2v11.2H31.6c-3.4 0-6.2 2.8-6.2 6.2v67.8c0 3.4 2.8 6.2 6.2 6.2h64.8c3.4 0 6.2-2.8 6.2-6.2V40.6c0-3.4-2.8-6.2-6.2-6.2zM57.1 27.5h13.9v6.9H57.1v-6.9zm41.2 81H31.6c-1 0-1.9-.8-1.9-1.9V40.6c0-1 .8-1.9 1.9-1.9h20v6.9c0 2.3 1.9 4.2 4.2 4.2h14c2.3 0 4.2-1.9 4.2-4.2v-6.9h20.5c1 0 1.9.8 1.9 1.9v67.8c-.1 1.1-.9 1.9-2 1.9z"/><path fill="var(--accent-color)" d="M72.2 69.3h-17c-1.1 0-2-.9-2-2s.9-2 2-2h17c1.1 0 2 .9 2 2s-.9 2-2 2zM85.4 86.8H42.6c-1.1 0-2-.9-2-2s.9-2 2-2h42.8c1.1 0 2 .9 2 2s-.9 2-2 2z"/></svg>`,
    noSearchResults: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="var(--accent-color)" d="M115.8 111.9L92.2 88.3c5.8-7.7 9.1-17.1 9.1-27.4C101.3 35.8 83.5 18 58.4 18S15.5 35.8 15.5 60.9s17.8 42.9 42.9 42.9c10.3 0 19.7-3.3 27.4-9.1l23.6 23.6c1.6 1.6 4.2 1.6 5.8 0l.6-.6c1.5-1.6 1.5-4.2-.1-5.8zm-57.4-19c-18.2 0-32.9-14.8-32.9-32.9S40.2 28 58.4 28s32.9 14.8 32.9 32.9-14.7 32-32.9 32z"/></svg>`,
    welcome: `<svg style="width: 48px; height: 48px; flex-shrink: 0;" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="var(--accent-color)" d="M109.9 66.2c-2.3-1.1-5-1.1-7.2.1-5.6 2.8-13.6 4.4-22.3 4.4-12.8 0-22.3-2.6-22.3-2.6-8.7 0-17.8-1.6-22.3-4.4-2.2-1.1-4.9-1.2-7.2-.1-2.3 1.1-3.7 3.4-3.7 5.9v23.2c0 2.5 1.4 4.8 3.7 5.9 2.3 1.1 5 .9 7.2-.1 5.6-2.8 13.6-4.4 22.3-4.4 12.8 0 22.3 2.6 22.3 2.6 8.7 0 17.8 1.6 22.3 4.4 2.2 1.1 4.9 1.2 7.2.1 2.3-1.1 3.7-3.4 3.7-5.9V72.1c.1-2.5-1.3-4.8-3.6-5.9zM103.1 88.5c-6.8-2.6-15.6-4-24.8-4-12.4 0-21.4 2.6-21.4 2.6-9.2 0-18.1 1.4-24.8 4V73c6.8 2.6 15.6 4 24.8 4 12.4 0 21.4-2.6 21.4-2.6 9.2 0 18.1-1.4 24.8-4v15.5z"/><path fill="var(--accent-color)" d="M96.7 45.3c-.6-3.8-3.8-6.6-7.6-6.6-4.2 0-7.6 3.4-7.6 7.6 0 .5.1 1 .2 1.5l-12.2 7c-.5-.1-1-.2-1.5-.2s-1 .1-1.5.2L54.4 48c.1-.5.2-1 .2-1.5 0-4.2-3.4-7.6-7.6-7.6s-7.6 3.4-7.6 7.6c0 .5.1 1 .2 1.5L27.4 54c-2.8-.5-5.4 1.5-5.9 4.3-.5 2.8 1.5 5.4 4.3 5.9l.6.1c.2 0 .5 0 .7 0l12.2-7.1c.5.1 1 .2 1.5.2s1-.1 1.5-.2l12.1 6.9c-.1.5-.2 1-.2 1.5 0 4.2 3.4 7.6 7.6 7.6s7.6-3.4 7.6-7.6c0-.5-.1-1-.2-1.5l12.2-7c.5.1 1 .2 1.5.2s1-.1 1.5-.2l12.1 7.1c2.8.5 5.4-1.5 5.9-4.3.5-2.8-1.5-5.4-4.3-5.9l-.6-.1c-.2 0-.5 0-.7 0l-12.2 7.1c-.5-.1-1-.2-1.5-.2s-1 .1-1.5.2l-12.1-6.9c.1-.5.2-1 .2-1.5 0-.4 0-.8-.1-1.2l12.1-7z"/></svg>`,
};

const ACHIEVEMENT_DEFINITIONS = {
    FIRST_TASK: { id: 'ach_first_task', icon: 'fa-shoe-prints', check: (app) => app.tasks.filter(t => t.completed).length >= 1 },
    TEN_TASKS: { id: 'ach_ten_tasks', icon: 'fa-rocket', check: (app) => app.tasks.filter(t => t.completed).length >= 10 },
    FIRST_POMO: { id: 'ach_first_pomo', icon: 'fa-brain', check: (app) => app.tasks.some(t => (t.pomodorosCompleted || 0) > 0) },
    PERFECTIONIST: { id: 'ach_perfectionist', icon: 'fa-check-double', check: (app) => app.tasks.some(t => t.completed && t.subtasks.length > 0 && t.subtasks.every(st => st.completed)) },
    STREAK_3: { id: 'ach_streak_3', icon: 'fa-fire', check: (app) => app.gamificationData.streak.current >= 3 },
    NIGHT_OWL: { id: 'ach_night_owl', icon: 'fa-moon', check: (app, task) => { if (!task || !task.completedAt) return false; const hour = new Date(task.completedAt).getHours(); return hour >= 0 && hour < 4; } }
};

class TaskMaster {
    constructor() {
        const defaultSettings = { 
            theme: 'light', 
            language: 'es', 
            soundTheme: 'classic', 
            pomodoro: { work: 25, short: 5, long: 15, cycles: 0 }, 
            notificationPermission: 'default',
            goals: { dailyTasks: 5, dailyPomos: 4 },
            customization: { fontFamily: 'sans-serif', accentColor: '#4facfe' }
        };
        this.tasks = this.loadData('tasks', []);
        const loadedSettings = this.loadData('settings', {});
        this.settings = {
            ...defaultSettings,
            ...loadedSettings,
            pomodoro: { ...defaultSettings.pomodoro, ...(loadedSettings.pomodoro || {}) },
            goals: { ...defaultSettings.goals, ...(loadedSettings.goals || {}) },
            customization: { ...defaultSettings.customization, ...(loadedSettings.customization || {}) },
        };
        this.gamificationData = { ...{ streak: { current: 0, lastCompletedDate: null }, unlockedAchievements: [] }, ...this.loadData('gamification', {}) };
        
        this.currentPomodoroTask = null; this.pomodoroInterval = null; this.isPomodoroRunning = false;
        this.pomodoroState = { type: 'work', time: this.settings.pomodoro.work * 60 };
        this.currentEditingTask = null; this.draggedTaskElement = null;
        this.charts = {}; this.calendar = null; this.currentView = 'list';
        this.commandPaletteIndex = -1;
        this.notifiedTaskIds = new Set(); 

        this.initializeUI();
        this.initializeEventListeners();
        this.initializeCommands();
        this.initializeNotificationScheduler(); 
    }
    
    initializeUI() {
        document.getElementById('themeSelector').value = this.settings.theme;
        document.getElementById('languageSelector').value = this.settings.language;
        document.getElementById('soundThemeSelector').value = this.settings.soundTheme;
        document.getElementById('fontSelector').value = this.settings.customization.fontFamily;
        document.getElementById('accentColorPicker').value = this.settings.customization.accentColor;
        document.getElementById('pomodoroWork').value = this.settings.pomodoro.work;
        document.getElementById('pomodoroShortBreak').value = this.settings.pomodoro.short;
        document.getElementById('pomodoroLongBreak').value = this.settings.pomodoro.long;
        this.applySettings();
    }

    loadData(key, defaultValue) { try { const data = localStorage.getItem(`taskmaster-${key}`); return data ? JSON.parse(data) : defaultValue; } catch (e) { console.error(`Error loading data for key: ${key}`, e); return defaultValue; } }
    saveData(key, data) { localStorage.setItem(`taskmaster-${key}`, JSON.stringify(data)); }
    
    applySettings() {
        document.documentElement.setAttribute('data-theme', this.settings.theme);
        document.documentElement.lang = this.settings.language;

        const accentColor = this.settings.customization.accentColor || this.getDefaultAccentColor();
        document.documentElement.style.setProperty('--accent-color', accentColor);
        document.body.style.fontFamily = `var(--font-family-${this.settings.customization.fontFamily})`;
        
        document.getElementById('accentColorValue').textContent = accentColor.toUpperCase();
        document.getElementById('accentColorPicker').value = accentColor;
        
        this.renderAllUI();
    }
    
    renderAllUI() {
        this.translateAllElements();
        this.renderTaskForm();
        this.renderAll(); 
    }

    translateAllElements() {
        const lang = this.settings.language;
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.getAttribute('data-translate-key');
            const translation = translations[lang]?.[key];
            if(translation) {
                const icon = el.querySelector('i.fa-solid');
                if (icon) {
                    el.innerHTML = ` ${translation}`;
                    el.prepend(icon);
                } else {
                    el.innerHTML = translation;
                }
            }
        });
        document.querySelectorAll('[data-translate-key-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-key-placeholder');
            if (translations[lang]?.[key]) el.placeholder = translations[lang][key];
        });
    }

    getDefaultAccentColor() {
        return getComputedStyle(document.documentElement).getPropertyValue(`--accent-color-default`).trim() || '#4facfe';
    }

    showToast(messageKey, type = 'success', extra = '') {
        const toast = document.getElementById('toast');
        const lang = this.settings.language;
        toast.innerHTML = `${translations[lang]?.[messageKey] || messageKey} ${extra}`;
        toast.className = `toast ${type} show`;
        if(type === 'achievement') this.playSound('achievement');
        setTimeout(() => { toast.className = 'toast'; }, 4000);
    }
    playSound(type) {
        try {
            const soundId = `${type}Sound-${this.settings.soundTheme}`;
            const sound = document.getElementById(soundId);
            if (sound && sound.src) {
                sound.currentTime = 0;
                sound.play();
            }
        } catch(e) {
            console.error("Error playing sound:", e);
        }
    }
    showModal(id) { document.getElementById(id).style.display = 'block'; }
    hideModal(id) { document.getElementById(id).style.display = 'none'; }
    hideAllModals() { document.querySelectorAll('.modal-overlay').forEach(modal => modal.style.display = 'none'); }

    renderAll() {
        this.renderStreakCounter(); 
        this.renderStats(); 
        this.renderFilterOptions(); 
        this.renderTasks(); 
        this.renderNotifications(); 
        this.updatePomodoroDisplay();
    }

    renderStreakCounter() {
        const streakCounterEl = document.getElementById('streakCounter');
        const lang = this.settings.language;
        if (this.gamificationData.streak.current > 0) {
            streakCounterEl.innerHTML = `🔥 ${this.gamificationData.streak.current} <span data-translate-key="streak_days">${translations[lang].streak_days}</span>`;
            streakCounterEl.style.display = 'flex';
        } else {
            streakCounterEl.style.display = 'none';
        }
    }

    renderStats() {
        const statsContainer = document.getElementById('statsContainer');
        const lang = this.settings.language;
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        const pending = total - completed;
        const overdue = this.tasks.filter(t => !t.completed && t.date && new Date(t.date + (t.time ? `T${t.time}` : 'T23:59:59')) < new Date()).length;
        
        statsContainer.innerHTML = `
            <div class="stat-card"><div class="stat-number">${total}</div><div class="stat-label" data-translate-key="stat_total">${translations[lang].stat_total}</div></div>
            <div class="stat-card"><div class="stat-number">${completed}</div><div class="stat-label" data-translate-key="stat_completed">${translations[lang].stat_completed}</div></div>
            <div class="stat-card"><div class="stat-number">${pending}</div><div class="stat-label" data-translate-key="stat_pending">${translations[lang].stat_pending}</div></div>
            <div class="stat-card"><div class="stat-number">${overdue}</div><div class="stat-label" data-translate-key="stat_overdue">${translations[lang].stat_overdue}</div></div>`;
    }

    renderTaskForm() {
        const container = document.getElementById('taskFormContainer');
        const lang = this.settings.language;
        const oldForm = document.getElementById('taskForm');
        if (oldForm) oldForm.remove();

        const recurrenceOptions = ['none', 'daily', 'weekly', 'fortnightly', 'monthly', 'business_days'];
        const formHTML = `<h2 class="section-title" data-translate-key="form_title">${translations[lang].form_title}</h2>
                          <form id="taskForm" class="task-form">
                              <div class="form-group full-width"><label data-translate-key="label_task">${translations[lang].label_task}</label><input type="text" name="title" required placeholder="${translations[lang].placeholder_task}"></div>
                              <div class="form-row">
                                  <div class="form-group"><label data-translate-key="label_category">${translations[lang].label_category}</label><select name="category">${Object.keys(translations.es).filter(k=>k.startsWith('cat_')).map(k=>`<option value="${k.replace('cat_','')}">${translations[lang][k]}</option>`).join('')}</select></div>
                                  <div class="form-group"><label data-translate-key="label_priority">${translations[lang].label_priority}</label><select name="priority">${Object.keys(translations.es).filter(k=>k.startsWith('prio_')).map(k=>`<option value="${k.replace('prio_','')}">${translations[lang][k]}</option>`).join('')}</select></div>
                              </div>
                              <div class="form-row">
                                  <div class="form-group"><label data-translate-key="label_date">${translations[lang].label_date}</label><input type="date" name="date"></div>
                                  <div class="form-group"><label data-translate-key="label_time">${translations[lang].label_time}</label><input type="time" name="time"></div>
                              </div>
                              <div class="form-group full-width"><label data-translate-key="label_recurrence">${translations[lang].label_recurrence}</label><select name="recurrence">${recurrenceOptions.map(r => `<option value="${r}">${translations[lang]['recur_' + r]}</option>`).join('')}</select></div>
                              <button type="submit" class="btn btn-primary full-width" data-translate-key="btn_add_task">${translations[lang].btn_add_task}</button>
                          </form>`;
        container.innerHTML = formHTML;
        document.getElementById('taskForm').addEventListener('submit', this.handleAddTask.bind(this));
    }

    renderFilterOptions() {
        const filter = document.getElementById('filterCategory');
        const lang = this.settings.language;
        const currentFilterValue = filter.value;
        const categories = ['all', ...new Set(this.tasks.map(t => t.category))];
        filter.innerHTML = categories.map(cat => `<option value="${cat}">${translations[lang]?.[cat === 'all' ? 'filter_all' : `cat_${cat}`] || cat}</option>`).join('');
        filter.value = currentFilterValue || 'all';
    }
    
    renderTasks() {
        const list = document.getElementById('tasksList');
        const lang = this.settings.language;
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const filterCat = document.getElementById('filterCategory').value;
        
        const taskSorter = (a, b) => {
            if (a.completed !== b.completed) return a.completed ? 1 : -1;
            const dateA = a.date ? new Date(a.date + (a.time ? `T${a.time}`: '')) : 0;
            const dateB = b.date ? new Date(b.date + (b.time ? `T${b.time}`: '')) : 0;
            if(dateA && dateB) return dateA - dateB;
            if(dateA) return -1;
            if(dateB) return 1;
            return 0;
        };

        const filteredTasks = this.tasks
            .filter(task => (task.title.toLowerCase().includes(searchTerm) || (task.notes && task.notes.toLowerCase().includes(searchTerm))) && (filterCat === 'all' || task.category === filterCat))
            .sort(taskSorter);
        
        if (this.tasks.length === 0) { list.innerHTML = `<div class="empty-state">${SVGs.noTasks}<h4>${translations[lang].empty_state_title}</h4><p>${translations[lang].empty_state_text}</p></div>`; return; }
        if (filteredTasks.length === 0) { list.innerHTML = `<div class="empty-state">${SVGs.noSearchResults}<h4>${translations[lang].empty_search_title}</h4><p>${translations[lang].empty_search_text}</p></div>`; return; }
        
        list.innerHTML = '';
        filteredTasks.forEach(task => list.appendChild(this.createTaskElement(task)));
    }
    
    createTaskElement(task) {
        const taskEl = document.createElement('div');
        const lang = this.settings.language;
        const today = new Date().setHours(0, 0, 0, 0); 
        let taskDateTime = null;
        if (task.date) {
            taskDateTime = new Date(task.date + (task.time ? `T${task.time}` : 'T23:59:59')).getTime();
        }
        let dateClass = '';
        if (!task.completed && taskDateTime) { 
            if (taskDateTime < Date.now()) dateClass = 'task-overdue'; 
            else if (new Date(taskDateTime).setHours(0,0,0,0) === today) dateClass = 'task-due-today'; 
        }

        taskEl.className = `task-item ${task.completed ? 'completed' : ''} ${this.currentPomodoroTask === task.id ? 'pomodoro-active' : ''} ${dateClass}`;
        taskEl.dataset.id = task.id; taskEl.draggable = true;
        const priorityColors = { low: 'var(--prio-low)', medium: 'var(--prio-medium)', high: 'var(--prio-high)'};
        if (!dateClass) { taskEl.style.borderLeftColor = priorityColors[task.priority] || '#cbd5e0'; }
        
        const subtasksDone = task.subtasks.filter(st => st.completed).length; const progress = task.subtasks.length > 0 ? (subtasksDone / task.subtasks.length) * 100 : (task.completed ? 100 : 0);
        const recurrenceText = task.recurrence && task.recurrence !== 'none' ? `<span><i class="fa-solid fa-repeat"></i> ${translations[lang]['recur_'+task.recurrence] || ''}</span>` : '';
        
        const dateString = task.date ? new Date(task.date + 'T00:00:00').toLocaleDateString(lang) : '';
        const timeString = task.time ? new Date('1970-01-01T' + task.time).toLocaleTimeString(lang, {hour: '2-digit', minute:'2-digit', hour12: true}) : '';

        const completeBtnClass = task.completed ? 'is-completed' : 'is-pending';
        const subtasksHTML = task.subtasks.length > 0 ? `<div class="task-subtasks">${task.subtasks.map(st => `
            <div class="task-subtask-item ${st.completed ? 'completed' : ''}" data-subtask-id="${st.id}">
                <input type="checkbox" id="subtask-${st.id}" data-task-id="${task.id}" ${st.completed ? 'checked' : ''} />
                <label for="subtask-${st.id}">${st.title}</label>
            </div>`).join('')}</div>` : '';

        taskEl.innerHTML = `<div class="task-header"><div class="task-info"><h4 class="task-title">${task.title}</h4><div class="task-meta">${task.notes ? '<span><i class="fa-solid fa-note-sticky"></i></span>' : ''}<span><i class="fa-solid fa-tag"></i> ${translations[lang]['cat_'+task.category] || task.category}</span>${dateString ? `<span><i class="fa-solid fa-calendar-days"></i> ${dateString}</span>` : ''}${timeString ? `<span><i class="fa-solid fa-clock"></i> ${timeString}</span>` : ''}${recurrenceText}</div></div><div class="task-actions"><button class="btn-icon pomodoro-start-btn" aria-label="Iniciar Pomodoro para esta tarea" title="Iniciar Pomodoro"><i class="fa-solid fa-clock"></i></button><button class="btn-icon edit-btn" aria-label="Editar tarea" title="Editar"><i class="fa-solid fa-pencil"></i></button><button class="btn-icon delete-btn" aria-label="Eliminar tarea" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button><button class="btn-icon complete-btn ${completeBtnClass}" aria-label="Marcar como completada" title="Completar"><i class="fa-solid fa-circle-check"></i></button></div></div>${subtasksHTML}${(task.subtasks.length > 0 || task.completed) ? `<div class="task-progress"><div class="progress-bar" style="width: ${progress}%"></div></div>` : ''}`;
        return taskEl;
    }

    renderNotifications() {
        const list = document.getElementById('notificationsList');
        const lang = this.settings.language;
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        let notificationsHTML = '';

        if (this.tasks.length === 0) {
            list.innerHTML = `<div class="notification" style="flex-direction: column; text-align: center;">${SVGs.welcome} <strong>${translations[lang].welcome_notification}</strong></div>`;
            return;
        }

        const overdueTasks = this.tasks.filter(t => !t.completed && t.date && new Date(t.date+'T23:59:59') < today);
        if (overdueTasks.length > 0) {
            notificationsHTML += `<div class="notification"><i class="fa-solid fa-triangle-exclamation" style="color:var(--prio-high);"></i> ${translations[lang].notif_overdue.replace('{count}', overdueTasks.length)}</div>`;
        }

        const dueTodayTasks = this.tasks.filter(t => !t.completed && t.date === today.toISOString().split('T')[0]);
        if (dueTodayTasks.length > 0) {
             notificationsHTML += `<div class="notification"><i class="fa-solid fa-star" style="color:var(--prio-medium);"></i> ${translations[lang].notif_due_today.replace('{count}', dueTodayTasks.length)}</div>`;
        }
        
        const dueTomorrowTasks = this.tasks.filter(t => !t.completed && t.date === tomorrow.toISOString().split('T')[0]);
        if (dueTomorrowTasks.length > 0) {
             notificationsHTML += `<div class="notification"><i class="fa-solid fa-bell"></i> ${translations[lang].notif_due_tomorrow.replace('{count}', dueTomorrowTasks.length)}</div>`;
        }
        
        if (this.gamificationData.streak.current > 0) {
            notificationsHTML += `<div class="notification"><i class="fa-solid fa-fire" style="color:var(--prio-medium);"></i> ${translations[lang].notif_streak.replace('{count}', this.gamificationData.streak.current)}</div>`;
        }
        
        const lastAchievementId = this.gamificationData.unlockedAchievements.slice(-1)[0];
        if(lastAchievementId) {
            const lastAchievementTitle = translations[lang][`${lastAchievementId}_title`];
            notificationsHTML += `<div class="notification"><i class="fa-solid fa-trophy" style="color:#fdd835;"></i> ${translations[lang].notif_achievement.replace('{achievement}', `<strong>${lastAchievementTitle}</strong>`)}</div>`;
        }
        
        if (notificationsHTML === '') {
            notificationsHTML = `<div class="notification"><i class="fa-solid fa-thumbs-up"></i> ${translations[lang].notif_all_clear}</div>`;
        }
        
        list.innerHTML = notificationsHTML;
    }
    
    initializeEventListeners() {
        document.addEventListener('keydown', this.handleKeyboardShortcuts.bind(this));
        document.getElementById('searchInput').addEventListener('input', () => this.renderTasks());
        document.getElementById('filterCategory').addEventListener('change', () => this.renderTasks());
        
        document.getElementById('listViewBtn').addEventListener('click', () => this.toggleView('list'));
        document.getElementById('calendarViewBtn').addEventListener('click', () => this.toggleView('calendar'));
        document.getElementById('statsBtn').addEventListener('click', () => this.showStatsDashboard());
        document.getElementById('dashboardBtn').addEventListener('click', () => this.showDashboard());
        document.getElementById('settingsBtn').addEventListener('click', () => { this.requestNotificationPermission(); this.renderAchievements(); this.showModal('settingsModal'); });
        
        document.getElementById('closeDashboard').addEventListener('click', () => this.hideModal('dashboardModal'));
        document.getElementById('closeStats').addEventListener('click', () => this.hideModal('statsModal'));
        document.getElementById('closeSettings').addEventListener('click', () => { this.hideModal('settingsModal'); });
        
        document.getElementById('themeSelector').addEventListener('change', (e) => { this.settings.theme = e.target.value; this.saveData('settings', this.settings); this.applySettings(); });
        document.getElementById('languageSelector').addEventListener('change', (e) => { this.settings.language = e.target.value; this.saveData('settings', this.settings); this.applySettings(); if(this.calendar) {this.calendar.setOption('locale', e.target.value); this.calendar.setOption('buttonText', this.getCalendarButtonTranslations());} });
        document.getElementById('soundThemeSelector').addEventListener('change', (e) => { this.settings.soundTheme = e.target.value; this.saveData('settings', this.settings); this.playSound('notification'); });

        document.getElementById('fontSelector').addEventListener('change', (e) => { this.settings.customization.fontFamily = e.target.value; this.saveData('settings', this.settings); this.applySettings(); });
        document.getElementById('accentColorPicker').addEventListener('input', (e) => { this.settings.customization.accentColor = e.target.value; this.saveData('settings', this.settings); this.applySettings(); });
        document.getElementById('resetAccentColor').addEventListener('click', () => {
            this.settings.customization.accentColor = this.getDefaultAccentColor();
            this.saveData('settings', this.settings);
            this.applySettings();
        });
        
        document.getElementById('dailyTasksGoal').addEventListener('change', (e) => { this.settings.goals.dailyTasks = parseInt(e.target.value, 10) || 5; this.saveData('settings', this.settings); this.renderGoalsProgress(); });
        document.getElementById('dailyPomosGoal').addEventListener('change', (e) => { this.settings.goals.dailyPomos = parseInt(e.target.value, 10) || 4; this.saveData('settings', this.settings); this.renderGoalsProgress(); });

        document.getElementById('exportBtn').addEventListener('click', this.exportData.bind(this));
        document.getElementById('importFile').addEventListener('change', this.importData.bind(this));
        
        document.getElementById('playBtn').addEventListener('click', () => this.startPomodoro()); document.getElementById('pauseBtn').addEventListener('click', () => this.pausePomodoro()); document.getElementById('resetBtn').addEventListener('click', () => this.resetPomodoro(true)); document.getElementById('skipBtn').addEventListener('click', () => this.nextPomodoroCycle(true));
        document.getElementById('pomodoroWork').addEventListener('change', (e) => this.updatePomodoroSetting('work', e.target.value)); document.getElementById('pomodoroShortBreak').addEventListener('change', (e) => this.updatePomodoroSetting('short', e.target.value)); document.getElementById('pomodoroLongBreak').addEventListener('change', (e) => this.updatePomodoroSetting('long', e.target.value));
        
        const tasksList = document.getElementById('tasksList');
        tasksList.addEventListener('click', this.handleTaskListClick.bind(this)); tasksList.addEventListener('dragstart', this.handleDragStart.bind(this)); tasksList.addEventListener('dragover', this.handleDragOver.bind(this)); tasksList.addEventListener('drop', this.handleDrop.bind(this));
        
        document.getElementById('cancelDelete').addEventListener('click', () => this.hideModal('deleteModal')); document.getElementById('cancelEdit').addEventListener('click', () => this.hideModal('editTaskModal')); document.getElementById('saveEdit').addEventListener('click', () => this.saveEditedTask());
        document.getElementById('newSubtaskInput').addEventListener('keypress', (e) => { if(e.key === 'Enter') { e.preventDefault(); this.addSubtask(); }});
        document.getElementById('editSubtaskList').addEventListener('click', (e) => { if(e.target.closest('.delete-subtask-btn')) this.deleteSubtask(e.target.closest('.delete-subtask-btn').dataset.subtaskId); });

        const commandInput = document.getElementById('commandInput');
        commandInput.addEventListener('input', () => this.filterCommands(commandInput.value));
        commandInput.addEventListener('keydown', (e) => this.navigateCommands(e));
        document.getElementById('commandPaletteOverlay').addEventListener('click', (e) => { if(e.target.id === 'commandPaletteOverlay') this.hideCommandPalette(); });
    }
    
    handleKeyboardShortcuts(e) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            this.showCommandPalette();
            return;
        }

        if (document.getElementById('commandPaletteOverlay').style.display === 'block') return;

        if (document.querySelector('.modal-overlay[style*="display: block"]') || document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.tagName === 'SELECT') { if (e.key === 'Escape') this.hideAllModals(); return; }
        switch(e.key.toLowerCase()) {
            case 'n': e.preventDefault(); document.querySelector('#taskFormContainer input[name="title"]').focus(); break;
            case 'f': e.preventDefault(); document.getElementById('searchInput').focus(); break;
            case 'd': e.preventDefault(); this.showDashboard(); break;
            case 'm': e.preventDefault(); this.showStatsDashboard(); break;
            case 's': e.preventDefault(); this.renderAchievements(); this.showModal('settingsModal'); break;
            case 'c': e.preventDefault(); this.toggleView('calendar'); break;
            case 'l': e.preventDefault(); this.toggleView('list'); break;
            case 'escape': this.hideAllModals(); break;
        }
    }

    handleTaskListClick(e) { 
        const taskEl = e.target.closest('.task-item'); if(!taskEl) return; 
        const taskId = parseInt(taskEl.dataset.id, 10); 
        if(e.target.closest('.delete-btn')) this.showDeleteModal(taskId); 
        else if(e.target.closest('.complete-btn')) this.toggleTaskCompletion(taskId); 
        else if(e.target.closest('.edit-btn')) this.showEditModal(taskId); 
        else if(e.target.closest('.pomodoro-start-btn')) { if (this.settings.notificationPermission !== 'granted') this.requestNotificationPermission(); this.startPomodoroForTask(taskId); }
        else if(e.target.matches('input[type="checkbox"]')) { const subtaskId = e.target.parentElement.dataset.subtaskId; this.toggleInlineSubtask(taskId, subtaskId); }
    }
    
    handleAddTask(e) {
        e.preventDefault(); const form = e.target; const formData = new FormData(form); const title = formData.get('title').trim(); if (!title) return;
        const newTask = { id: Date.now(), title, category: formData.get('category'), priority: formData.get('priority'), recurrence: formData.get('recurrence'), date: formData.get('date') || null, time: formData.get('time') || null, completed: false, completedAt: null, pomodorosCompleted: 0, subtasks: [], notes: '' };
        this.tasks.unshift(newTask); this.saveData('tasks', this.tasks); document.getElementById('filterCategory').value = 'all'; this.renderAll(); if(this.calendar) this.calendar.refetchEvents(); form.reset(); this.showToast('toast_task_added'); this.checkAchievements();
    }
    
    // =================================================================
    // NUEVA LÓGICA DE RECURRENCIA
    // =================================================================

    calculateNextRecurrenceDate(task) {
        const baseDate = new Date(task.date + (task.time ? `T${task.time}` : 'T00:00:00'));
        let nextDate = new Date(baseDate);

        switch (task.recurrence) {
            case 'daily':
                nextDate.setDate(baseDate.getDate() + 1);
                break;
            case 'weekly':
                nextDate.setDate(baseDate.getDate() + 7);
                break;
            case 'monthly':
                nextDate.setMonth(baseDate.getMonth() + 1);
                break;
            case 'fortnightly': // Lógica para el 15 y 30
                const day = baseDate.getDate();
                if (day < 15) {
                    nextDate.setDate(15);
                } else if (day < 30) {
                    // Cuidado con Febrero, que tiene menos de 30 días
                    const tempDate = new Date(nextDate);
                    tempDate.setDate(30);
                    if (tempDate.getMonth() !== nextDate.getMonth()) { // Si al poner 30 salta de mes
                        nextDate.setMonth(nextDate.getMonth() + 1);
                        nextDate.setDate(15);
                    } else {
                        nextDate.setDate(30);
                    }
                } else {
                    nextDate.setMonth(baseDate.getMonth() + 1);
                    nextDate.setDate(15);
                }
                break;
            case 'business_days':
                nextDate.setDate(baseDate.getDate() + 1);
                if (nextDate.getDay() === 6) { // Sábado
                    nextDate.setDate(nextDate.getDate() + 2);
                } else if (nextDate.getDay() === 0) { // Domingo
                    nextDate.setDate(nextDate.getDate() + 1);
                }
                break;
            default:
                return null; // No es recurrente
        }
        return nextDate;
    }

    toggleTaskCompletion(taskId) {
        const taskEl = document.querySelector(`.task-item[data-id="${taskId}"]`);
        const task = this.tasks.find(t => t.id === taskId); 
        if(!task) return;

        const wasCompleted = task.completed; 
        task.completed = !task.completed; 
        task.completedAt = task.completed ? new Date().toISOString() : null;

        if (task.completed && !wasCompleted) { 
            this.updateStreak(); 
            this.checkAchievements(task); 

            if (task.recurrence && task.recurrence !== 'none' && task.date) {
                const nextDate = this.calculateNextRecurrenceDate(task);
                if (nextDate) {
                    const newTask = { ...task, id: Date.now(), completed: false, completedAt: null, subtasks: task.subtasks.map(st => ({...st, completed: false})) }; 
                    newTask.date = nextDate.toISOString().split('T')[0];
                    this.tasks.push(newTask);
                }
            }
        }
        
        if (taskEl) {
            taskEl.classList.add('slide-out');
            setTimeout(() => {
                this.saveData('tasks', this.tasks); this.renderAll(); if(this.calendar) this.calendar.refetchEvents(); this.showToast('toast_task_updated');
            }, 500);
        } else {
            this.saveData('tasks', this.tasks); this.renderAll(); if(this.calendar) this.calendar.refetchEvents(); this.showToast('toast_task_updated');
        }
    }
    
    showDeleteModal(taskId) { const lang = this.settings.language; const modal = document.getElementById('deleteModal'); modal.querySelector('h3').textContent = translations[lang].delete_modal_title; modal.querySelector('p').textContent = translations[lang].delete_modal_text; modal.querySelector('#cancelDelete').textContent = translations[lang].btn_cancel; modal.querySelector('#confirmDelete').textContent = translations[lang].btn_delete; this.showModal('deleteModal'); document.getElementById('confirmDelete').onclick = () => { const taskEl = document.querySelector(`.task-item[data-id="${taskId}"]`); if (taskEl) { taskEl.classList.add('slide-out'); } setTimeout(() => { this.tasks = this.tasks.filter(t => t.id !== taskId); if (this.currentPomodoroTask === taskId) this.resetPomodoro(true); this.saveData('tasks', this.tasks); this.renderAll(); if(this.calendar) this.calendar.refetchEvents(); this.hideModal('deleteModal'); this.showToast('toast_task_deleted', 'error');}, 500); }; }
    showEditModal(taskId) { this.currentEditingTask = this.tasks.find(t => t.id === taskId); if (!this.currentEditingTask) return; const lang = this.settings.language; const modal = document.getElementById('editTaskModal'); modal.querySelector('h3').textContent = translations[lang].edit_modal_title; modal.querySelector('label[data-translate-key="label_task"]').textContent = translations[lang].label_task; modal.querySelector('label[data-translate-key="label_time"]').textContent = translations[lang].label_time; modal.querySelector('label[data-translate-key="label_notes"]').textContent = translations[lang].label_notes; modal.querySelector('label[data-translate-key="label_subtasks"]').textContent = translations[lang].label_subtasks; modal.querySelector('#newSubtaskInput').placeholder = translations[lang].placeholder_subtask; modal.querySelector('#editTaskNotes').placeholder = translations[lang].placeholder_notes; modal.querySelector('#cancelEdit').textContent = translations[lang].btn_cancel; modal.querySelector('#saveEdit').textContent = translations[lang].btn_save_changes; document.getElementById('editTaskTitle').value = this.currentEditingTask.title; document.getElementById('editTaskTime').value = this.currentEditingTask.time || ''; document.getElementById('editTaskNotes').value = this.currentEditingTask.notes || ''; this.renderSubtasks(); this.showModal('editTaskModal'); }
    saveEditedTask() { if (!this.currentEditingTask) return; this.currentEditingTask.title = document.getElementById('editTaskTitle').value.trim(); this.currentEditingTask.time = document.getElementById('editTaskTime').value || null; this.currentEditingTask.notes = document.getElementById('editTaskNotes').value.trim(); this.saveData('tasks', this.tasks); this.hideModal('editTaskModal'); this.renderAll(); if(this.calendar) this.calendar.refetchEvents(); this.showToast('toast_task_updated'); this.currentEditingTask = null; }
    renderSubtasks() { const list = document.getElementById('editSubtaskList'); list.innerHTML = this.currentEditingTask.subtasks.map(subtask => `<div class="subtask-item" data-subtask-id="${subtask.id}"><label class="${subtask.completed ? 'completed' : ''}"><input type="checkbox" ${subtask.completed ? 'checked' : ''} onchange="app.toggleSubtask('${subtask.id}')"><span>${subtask.title}</span></label><button class="btn-icon delete-subtask-btn" data-subtask-id="${subtask.id}"><i class="fa-solid fa-times"></i></button></div>`).join(''); }
    addSubtask() { const input = document.getElementById('newSubtaskInput'); const title = input.value.trim(); if (title && this.currentEditingTask) { this.currentEditingTask.subtasks.push({ id: `sub-${Date.now()}`, title, completed: false }); input.value = ''; this.renderSubtasks(); } }
    toggleSubtask(subtaskId) { const subtask = this.currentEditingTask.subtasks.find(st => st.id === subtaskId); if (subtask) subtask.completed = !subtask.completed; this.renderSubtasks(); }
    deleteSubtask(subtaskId) { this.currentEditingTask.subtasks = this.currentEditingTask.subtasks.filter(st => st.id !== subtaskId); this.renderSubtasks(); }
    toggleInlineSubtask(taskId, subtaskId) { const task = this.tasks.find(t => t.id === taskId); const subtask = task.subtasks.find(st => st.id === subtaskId); if (subtask) { subtask.completed = !subtask.completed; this.saveData('tasks', this.tasks); this.renderAll(); this.checkAchievements(task); } }
    
    handleDragStart(e) { if(e.target.classList.contains('task-item')) { this.draggedTaskElement = e.target; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', e.target.dataset.id); setTimeout(() => { e.target.classList.add('dragging'); }, 0); } }
    handleDragOver(e) { e.preventDefault(); }
    handleDrop(e) { e.preventDefault(); const draggedId = parseInt(e.dataTransfer.getData('text/plain'), 10); if (!draggedId || !this.draggedTaskElement) return; const dropTarget = e.target.closest('.task-item'); this.draggedTaskElement.classList.remove('dragging'); if (dropTarget && parseInt(dropTarget.dataset.id, 10) !== draggedId) { const draggedIndex = this.tasks.findIndex(t => t.id === draggedId); const targetIndex = this.tasks.findIndex(t => t.id === parseInt(dropTarget.dataset.id, 10)); const [draggedItem] = this.tasks.splice(draggedIndex, 1); this.tasks.splice(targetIndex, 0, draggedItem); this.saveData('tasks', this.tasks); this.renderTasks(); } }

    updateStreak() { const today = new Date().toISOString().split('T')[0]; const lastDate = this.gamificationData.streak.lastCompletedDate; if (today === lastDate) return; const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1); const yesterdayStr = yesterday.toISOString().split('T')[0]; if (lastDate === yesterdayStr) { this.gamificationData.streak.current++; } else { this.gamificationData.streak.current = 1; } this.gamificationData.streak.lastCompletedDate = today; this.saveData('gamification', this.gamificationData); }
    checkAchievements(task = null) { const lang = this.settings.language; for (const key in ACHIEVEMENT_DEFINITIONS) { const ach = ACHIEVEMENT_DEFINITIONS[key]; if (!this.gamificationData.unlockedAchievements.includes(ach.id) && ach.check(this, task)) { this.gamificationData.unlockedAchievements.push(ach.id); this.saveData('gamification', this.gamificationData); this.showToast('toast_achievement_unlocked', 'achievement', translations[lang][`${ach.id}_title`]); } } }
    renderAchievements() { const grid = document.getElementById('achievementsGrid'); const lang = this.settings.language; grid.innerHTML = Object.values(ACHIEVEMENT_DEFINITIONS).map(ach => { const unlocked = this.gamificationData.unlockedAchievements.includes(ach.id); return `<div class="achievement-item ${unlocked ? 'unlocked' : ''}" title="${translations[lang][`${ach.id}_desc`]}"><i class="fa-solid ${ach.icon} achievement-icon"></i><span class="ach-title">${translations[lang][`${ach.id}_title`]}</span></div>`; }).join(''); }
    
    finishPomodoroCycle() {
        this.playSound('notification');
        const timerEl = document.getElementById('pomodoroTimer'); timerEl.classList.add('finished');
        if(this.pomodoroState.type === 'work' && this.currentPomodoroTask) { const task = this.tasks.find(t => t.id === this.currentPomodoroTask); if(task) { task.pomodorosCompleted = (task.pomodorosCompleted || 0) + 1; this.saveData('tasks', this.tasks); this.checkAchievements(task); } }
        const lang = this.settings.language; this.showPushNotification(translations[lang].notification_title, this.pomodoroState.type === 'work' ? translations[lang].notification_work_end : translations[lang].notification_break_end);
        setTimeout(() => { timerEl.classList.remove('finished'); this.nextPomodoroCycle(false); }, 3000);
    }
    updatePomodoroSetting(key, value) { this.settings.pomodoro[key] = parseInt(value, 10); this.saveData('settings', this.settings); if(!this.isPomodoroRunning) this.resetPomodoro(false); this.showToast('toast_task_updated'); }
    startPomodoroForTask(taskId) { this.currentPomodoroTask = taskId; this.resetPomodoro(false); this.startPomodoro(); this.renderTasks(); }
    startPomodoro() { if (this.isPomodoroRunning) return; this.isPomodoroRunning = true; document.body.classList.add('focus-mode'); this.pomodoroInterval = setInterval(() => { this.pomodoroState.time--; this.updatePomodoroDisplay(); if (this.pomodoroState.time < 0) this.finishPomodoroCycle(); }, 1000); }
    pausePomodoro() { clearInterval(this.pomodoroInterval); this.isPomodoroRunning = false; document.body.classList.remove('focus-mode'); }
    resetPomodoro(fullReset) { this.pausePomodoro(); if (fullReset) { this.settings.pomodoro.cycles = 0; this.currentPomodoroTask = null; } this.pomodoroState = { type: 'work', time: this.settings.pomodoro.work * 60 }; this.updatePomodoroDisplay(); if (fullReset) this.renderTasks(); }
    nextPomodoroCycle(isSkip) { this.pausePomodoro(); if (this.pomodoroState.type === 'work') { this.settings.pomodoro.cycles++; this.pomodoroState = { type: (this.settings.pomodoro.cycles % 4 === 0 ? 'long' : 'short'), time: this.settings.pomodoro[(this.settings.pomodoro.cycles % 4 === 0 ? 'long' : 'short')] * 60 }; } else { this.pomodoroState = { type: 'work', time: this.settings.pomodoro.work * 60 }; } this.saveData('settings', this.settings); this.updatePomodoroDisplay(); if (!isSkip) this.startPomodoro(); }
    updatePomodoroDisplay() { const { time, type } = this.pomodoroState; document.getElementById('pomodoroTimer').textContent = `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`; const lang = this.settings.language; document.getElementById('pomodoroCycleTitle').textContent = translations[lang][`pomo_cycle_${type === 'short' ? 'short' : type === 'long' ? 'long' : 'work'}`]; const taskTitleEl = document.getElementById('pomodoroTaskTitle'); if(this.currentPomodoroTask){ const task = this.tasks.find(t => t.id === this.currentPomodoroTask); taskTitleEl.textContent = task ? `${translations[lang].pomo_task_title_prefix}${task.title}` : ''; } else { taskTitleEl.textContent = ''; } }
    
    toggleView(view) {
        if (this.currentView === view) return; this.currentView = view;
        const listView = document.getElementById('list-view-section'); const calendarView = document.getElementById('calendar-view-section'); const listBtn = document.getElementById('listViewBtn'); const calendarBtn = document.getElementById('calendarViewBtn');
        if (view === 'calendar') { listView.classList.add('view-hidden'); calendarView.classList.remove('view-hidden'); listBtn.classList.remove('active'); calendarBtn.classList.add('active'); this.initializeCalendar(); } 
        else { listView.classList.remove('view-hidden'); calendarView.classList.add('view-hidden'); listBtn.classList.add('active'); calendarBtn.classList.remove('active'); }
    }

    getCalendarButtonTranslations() {
        const lang = this.settings.language;
        return { today: translations[lang].calendar_today, month: translations[lang].calendar_month, week: translations[lang].calendar_week, list: translations[lang].calendar_list };
    }

    initializeCalendar() {
        if (this.calendar) { this.calendar.refetchEvents(); return; }
        const calendarEl = document.getElementById('calendar');
        const priorityColors = { low: 'var(--prio-low)', medium: 'var(--prio-medium)', high: 'var(--prio-high)'};
        
        this.calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth', locale: this.settings.language, buttonText: this.getCalendarButtonTranslations(),
            headerToolbar: { left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,listWeek' },
            events: (fetchInfo, successCallback, failureCallback) => {
                const events = this.tasks
                    .filter(t => t.date)
                    .map(t => ({ 
                        id: t.id, 
                        title: t.title, 
                        start: t.time ? `${t.date}T${t.time}` : t.date,
                        color: t.completed ? 'grey' : (priorityColors[t.priority] || 'var(--accent-color)'), 
                        allDay: !t.time
                    }));
                successCallback(events);
            },
            editable: true,
            eventDrop: (info) => {
                const taskId = parseInt(info.event.id, 10);
                const task = this.tasks.find(t => t.id === taskId);
                if (task) {
                    const newStart = info.event.start;
                    const dateParts = newStart.toISOString().split('T');
                    task.date = dateParts[0];
                    task.time = newStart.toTimeString().substring(0,5);
                    this.saveData('tasks', this.tasks);
                    this.renderAll();
                    this.showToast('toast_task_rescheduled');
                }
            }
        });
        this.calendar.render();
    }

    showDashboard() { this.showModal('dashboardModal'); setTimeout(() => { this.renderWeeklyChart(); this.renderCategoryChart(); this.renderPomodoroChart(); this.renderMonthlyChart(); }, 100); }
    renderChart(canvasId, type, data, options = {}) { if (this.charts[canvasId]) { this.charts[canvasId].destroy(); } const ctx = document.getElementById(canvasId); if (!ctx) return; this.charts[canvasId] = new Chart(ctx.getContext('2d'), { type, data, options }); }
    renderWeeklyChart() { const lang = this.settings.language; const labels = []; const data = [0, 0, 0, 0, 0, 0, 0]; const dayKeys = ['day_sun', 'day_mon', 'day_tue', 'day_wed', 'day_thu', 'day_fri', 'day_sat']; for (let i = 6; i >= 0; i--) { const date = new Date(); date.setDate(date.getDate() - i); labels.push(translations[lang][dayKeys[date.getDay()]]); } const sevenDaysAgo = new Date(); sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); this.tasks.filter(t => t.completed && t.completedAt && new Date(t.completedAt) > sevenDaysAgo).forEach(task => { const completedDate = new Date(task.completedAt); const diffDays = Math.floor((new Date().setHours(0,0,0,0) - completedDate.setHours(0,0,0,0)) / (1000 * 60 * 60 * 24)); if(diffDays >= 0 && diffDays < 7) { data[6 - diffDays]++; } }); this.renderChart('completedTasksChart', 'bar', { labels, datasets: [{ label: translations[lang].stat_completed, data, backgroundColor: 'rgba(79, 172, 254, 0.5)', borderColor: 'rgba(79, 172, 254, 1)', borderWidth: 1 }] }, { responsive: true, scales: { y: { beginAtZero: true, ticks: { stepSize: 1, color: getComputedStyle(document.body).getPropertyValue('--text-muted') } }, x: { ticks: { color: getComputedStyle(document.body).getPropertyValue('--text-muted') } } }, plugins: { legend: { labels: { color: getComputedStyle(document.body).getPropertyValue('--text-muted') } } } }); }
    renderCategoryChart() { const lang = this.settings.language; const categoryCounts = this.tasks.reduce((acc, task) => { acc[task.category] = (acc[task.category] || 0) + 1; return acc; }, {}); const labels = Object.keys(categoryCounts).map(cat => translations[lang]['cat_' + cat] || cat); const data = Object.values(categoryCounts); this.renderChart('categoryDistributionChart', 'doughnut', { labels, datasets: [{ data, backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'], }] }, { responsive: true, plugins: { legend: { position: 'top', labels: { color: getComputedStyle(document.body).getPropertyValue('--text-muted') } } } }); }
    renderPomodoroChart() { const lang = this.settings.language; const pomodoroTasks = this.tasks.filter(t => (t.pomodorosCompleted || 0) > 0).sort((a,b) => b.pomodorosCompleted - a.pomodorosCompleted).slice(0, 7); const labels = pomodoroTasks.map(t => t.title.length > 25 ? t.title.substring(0, 22) + '...' : t.title); const data = pomodoroTasks.map(t => t.pomodorosCompleted); this.renderChart('pomodoroPerformanceChart', 'bar', { labels, datasets: [{ label: 'Pomodoros', data, backgroundColor: 'rgba(255, 159, 64, 0.5)', borderColor: 'rgba(255, 159, 64, 1)', borderWidth: 1 }] }, { responsive: true, indexAxis: 'y', scales: { y: { ticks: { color: getComputedStyle(document.body).getPropertyValue('--text-muted') } }, x: { ticks: { stepSize: 1, color: getComputedStyle(document.body).getPropertyValue('--text-muted') } } }, plugins: { legend: { labels: { color: getComputedStyle(document.body).getPropertyValue('--text-muted') } } } }); }
    renderMonthlyChart() { const lang = this.settings.language; const labels = []; const data = Array(30).fill(0); const thirtyDaysAgo = new Date(); thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30); for (let i = 29; i >= 0; i--) { const date = new Date(); date.setDate(date.getDate() - i); labels.push(date.toLocaleDateString(lang, { month: 'short', day: 'numeric' })); } this.tasks.filter(t => t.completed && t.completedAt && new Date(t.completedAt) > thirtyDaysAgo).forEach(task => { const completedDate = new Date(task.completedAt); const diffDays = Math.floor((new Date().setHours(0,0,0,0) - completedDate.setHours(0,0,0,0)) / (1000 * 60 * 60 * 24)); if(diffDays >= 0 && diffDays < 30) { data[29 - diffDays]++; } }); this.renderChart('monthlyTasksChart', 'line', { labels, datasets: [{ label: translations[lang].stat_completed, data, backgroundColor: 'rgba(75, 192, 192, 0.2)', borderColor: 'rgba(75, 192, 192, 1)', borderWidth: 2, tension: 0.3 }] }, { responsive: true, scales: { y: { beginAtZero: true, ticks: { stepSize: 1, color: getComputedStyle(document.body).getPropertyValue('--text-muted') } }, x: { ticks: { color: getComputedStyle(document.body).getPropertyValue('--text-muted') } } }, plugins: { legend: { display: false } } }); }
    
    showStatsDashboard() {
        document.getElementById('dailyTasksGoal').value = this.settings.goals.dailyTasks;
        document.getElementById('dailyPomosGoal').value = this.settings.goals.dailyPomos;
        this.renderGoalsProgress();
        this.renderDetailedStats();
        this.showModal('statsModal');
    }

    renderGoalsProgress() {
        const lang = this.settings.language;
        const today = new Date().toISOString().split('T')[0];
        const tasksToday = this.tasks.filter(t => t.completed && t.completedAt && new Date(t.completedAt).toISOString().startsWith(today)).length;
        const pomosToday = this.tasks.reduce((acc, task) => {
            if (task.completed && task.completedAt && new Date(task.completedAt).toISOString().startsWith(today)) {
                return acc + (task.pomodorosCompleted || 0);
            }
            return acc;
        }, 0);

        const taskGoal = this.settings.goals.dailyTasks;
        const pomoGoal = this.settings.goals.dailyPomos;
        const taskProgress = taskGoal > 0 ? Math.min((tasksToday / taskGoal) * 100, 100) : 0;
        const pomoProgress = pomoGoal > 0 ? Math.min((pomosToday / pomoGoal) * 100, 100) : 0;

        const container = document.getElementById('goalsProgress');
        container.innerHTML = `
            <div class="goal-progress">
                <label><span>${translations[lang].stats_daily_task_goal}</span><span>${tasksToday} / ${taskGoal}</span></label>
                <div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${taskProgress}%">${Math.round(taskProgress)}%</div></div>
            </div>
            <div class="goal-progress">
                <label><span>${translations[lang].stats_daily_pomo_goal}</span><span>${pomosToday} / ${pomoGoal}</span></label>
                <div class="progress-bar-container"><div class="progress-bar-fill" style="width: ${pomoProgress}%">${Math.round(pomoProgress)}%</div></div>
            </div>
        `;
    }

    renderDetailedStats() {
        const lang = this.settings.language;
        const container = document.getElementById('detailedStats');
        const today = new Date().toISOString().split('T')[0];

        const tasksTodayCount = this.tasks.filter(t => t.completed && t.completedAt && new Date(t.completedAt).toISOString().startsWith(today)).length;
        const pomosTodayCount = this.tasks.reduce((acc, t) => {
            if (t.completed && t.completedAt && new Date(t.completedAt).toISOString().startsWith(today)) {
                return acc + (t.pomodorosCompleted || 0);
            } return acc;
        }, 0);
        
        const totalPomos = this.tasks.reduce((acc, task) => acc + (task.pomodorosCompleted || 0), 0);
        const tasksWithPomos = this.tasks.filter(t => (t.pomodorosCompleted || 0) > 0).length;
        const avgFocusTime = tasksWithPomos > 0 ? ((totalPomos * this.settings.pomodoro.work) / tasksWithPomos).toFixed(1) : 0;
        
        const categoryCounts = this.tasks.filter(t => t.completed).reduce((acc, task) => {
            acc[task.category] = (acc[task.category] || 0) + 1;
            return acc;
        }, {});
        const topCategory = Object.keys(categoryCounts).sort((a,b) => categoryCounts[b] - categoryCounts[a])[0];

        container.innerHTML = `
            <div class="stat-card"><div class="stat-number">${this.gamificationData.streak.current}</div><div class="stat-label" data-translate-key="stat_streak">${translations[lang].stat_streak}</div></div>
            <div class="stat-card"><div class="stat-number">${tasksTodayCount}</div><div class="stat-label" data-translate-key="stat_today_tasks">${translations[lang].stat_today_tasks}</div></div>
            <div class="stat-card"><div class="stat-number">${pomosTodayCount}</div><div class="stat-label" data-translate-key="stat_today_pomos">${translations[lang].stat_today_pomos}</div></div>
            <div class="stat-card"><div class="stat-number">${avgFocusTime} <small>min</small></div><div class="stat-label" data-translate-key="stat_avg_focus">${translations[lang].stat_avg_focus}</div></div>
            <div class="stat-card"><div class="stat-number" style="font-size: 1.5rem;">${topCategory ? (translations[lang]['cat_' + topCategory] || topCategory) : '-'}</div><div class="stat-label" data-translate-key="stat_top_category">${translations[lang].stat_top_category}</div></div>
        `;
    }

    initializeCommands() {
        this.commands = [
            { id: 'addTask', text: 'Agregar nueva tarea', icon: 'fa-plus', shortcut: 'N', action: () => document.querySelector('#taskFormContainer input[name="title"]').focus() },
            { id: 'viewList', text: 'Ver lista de tareas', icon: 'fa-list-ul', shortcut: 'L', action: () => this.toggleView('list') },
            { id: 'viewCalendar', text: 'Ver calendario', icon: 'fa-calendar-days', shortcut: 'C', action: () => this.toggleView('calendar') },
            { id: 'openStats', text: 'Ver metas y estadísticas', icon: 'fa-bullseye', shortcut: 'M', action: () => this.showStatsDashboard() },
            { id: 'openDashboard', text: 'Ver dashboard de productividad', icon: 'fa-chart-line', shortcut: 'D', action: () => this.showDashboard() },
            { id: 'openSettings', text: 'Abrir configuración', icon: 'fa-gear', shortcut: 'S', action: () => this.showModal('settingsModal') },
            { id: 'toggleTheme', text: 'Cambiar tema Claro/Oscuro', icon: 'fa-circle-half-stroke', action: () => { this.settings.theme = this.settings.theme === 'light' ? 'dark' : 'light'; this.saveData('settings', this.settings); this.applySettings(); }},
            { id: 'exportData', text: 'Exportar datos', icon: 'fa-file-export', action: () => this.exportData() }
        ];
    }
    
    showCommandPalette() {
        this.hideAllModals();
        const overlay = document.getElementById('commandPaletteOverlay');
        const input = document.getElementById('commandInput');
        overlay.style.display = 'block';
        input.value = '';
        this.filterCommands('');
        input.focus();
    }

    hideCommandPalette() {
        document.getElementById('commandPaletteOverlay').style.display = 'none';
    }
    
    filterCommands(query) {
        const commandList = document.getElementById('commandList');
        const lowerQuery = query.toLowerCase();
        const filtered = this.commands.filter(cmd => cmd.text.toLowerCase().includes(lowerQuery));
        
        commandList.innerHTML = '';
        filtered.forEach(cmd => {
            const li = document.createElement('li');
            li.dataset.commandId = cmd.id;
            li.innerHTML = `
                <i class="fa-solid ${cmd.icon}"></i>
                <span class="command-text">${cmd.text}</span>
                ${cmd.shortcut ? `<span class="command-shortcut">${cmd.shortcut}</span>` : ''}
            `;
            li.addEventListener('click', () => this.executeCommand(cmd.id));
            commandList.appendChild(li);
        });

        this.commandPaletteIndex = -1;
        if(filtered.length > 0) {
            this.commandPaletteIndex = 0;
            commandList.children[0].classList.add('selected');
        }
    }

    navigateCommands(e) {
        const list = document.getElementById('commandList');
        const items = list.getElementsByTagName('li');
        if (items.length === 0) return;

        if(e.key === 'ArrowDown') {
            e.preventDefault();
            this.commandPaletteIndex = (this.commandPaletteIndex + 1) % items.length;
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.commandPaletteIndex = (this.commandPaletteIndex - 1 + items.length) % items.length;
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if(this.commandPaletteIndex > -1) {
                const commandId = items[this.commandPaletteIndex].dataset.commandId;
                this.executeCommand(commandId);
            }
            return;
        } else if (e.key === 'Escape') {
            this.hideCommandPalette();
            return;
        }

        for(let i=0; i < items.length; i++) {
            items[i].classList.remove('selected');
        }
        if(this.commandPaletteIndex > -1) {
            items[this.commandPaletteIndex].classList.add('selected');
            items[this.commandPaletteIndex].scrollIntoView({ block: 'nearest' });
        }
    }

    executeCommand(commandId) {
        const command = this.commands.find(cmd => cmd.id === commandId);
        if(command) {
            command.action();
            this.hideCommandPalette();
        }
    }

    async requestNotificationPermission() { if (this.settings.notificationPermission === 'default' && 'Notification' in window) { this.settings.notificationPermission = await Notification.requestPermission(); this.saveData('settings', this.settings); }}
    showPushNotification(title, body, tag = '') { if (this.settings.notificationPermission === 'granted') { const options = { body: body, icon: './icons/android-launchericon-192-192.png', requireInteraction: true, tag: tag || 'taskmaster-notification' }; try { navigator.serviceWorker.getRegistration().then(reg => { if (reg) reg.showNotification(title, options); }); } catch (e) { console.error("Error showing push notification:", e); } }}
    
    initializeNotificationScheduler() {
        this.notificationInterval = setInterval(() => {
            this.checkDueTasks();
        }, 30000); 
    }

    checkDueTasks() {
        const now = Date.now();
        const lang = this.settings.language;
        
        this.tasks.forEach(task => {
            if (task.completed || !task.date || !task.time || this.notifiedTaskIds.has(task.id)) {
                return;
            }
            
            const dueTime = new Date(`${task.date}T${task.time}`).getTime();
            
            if (dueTime <= now && dueTime > (now - 60000)) { 
                console.log(`Scheduling notification for task: ${task.title}`);
                const title = translations[lang].notification_title;
                const body = translations[lang].notif_due_now.replace('{taskTitle}', task.title);
                
                this.showPushNotification(title, body, `task-${task.id}`);
                this.playSound('notification');
                
                this.notifiedTaskIds.add(task.id);
            }
        });
    }


    exportData() { const data = JSON.stringify({ tasks: this.tasks, settings: this.settings, gamification: this.gamificationData }); const blob = new Blob([data], {type: 'application/json'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'taskmaster_backup.json'; a.click(); URL.revokeObjectURL(url); }
    importData(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = (e) => { try { const data = JSON.parse(e.target.result); if (data.tasks && data.settings) { this.tasks = data.tasks; this.settings = data.settings; if(data.gamification) this.gamificationData = data.gamification; this.saveData('tasks', this.tasks); this.saveData('settings', this.settings); this.saveData('gamification', this.gamificationData); this.applySettings(); this.showToast('feedback_imported'); } else { throw new Error('Invalid file format'); } } catch (error) { this.showToast('feedback_error_import', 'error'); console.error(error); } }; reader.readAsText(file); }
}

document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    window.app = new TaskMaster();

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js')
                .then(reg => console.log('Service Worker: Registrado con éxito.'))
                .catch(err => console.error('Service Worker: Fallo en el registro.', err));
        });
    }

    preloader.classList.add('hidden');
});