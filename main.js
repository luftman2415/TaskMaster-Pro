// AQUI VA TODO EL CÓDIGO JAVASCRIPT
const translations = {
    es: { title: "🎯 TaskMaster Pro", subtitle: "Organiza tu día con inteligencia", stat_total: "Total", stat_completed: "Completadas", stat_pending: "Pendientes", stat_overdue: "Vencidas", form_title: "¿Qué necesitas hacer hoy?", label_task: "Tarea", placeholder_task: "Ej: Diseñar el nuevo logo (Atajo: N)", label_category: "Categoría", cat_work: "💼 Trabajo", cat_personal: "👤 Personal", cat_health: "🏃 Salud", cat_study: "📚 Estudio", cat_other: "📋 Otros", label_priority: "Prioridad", prio_low: "🟢 Baja", prio_medium: "🟡 Media", prio_high: "🔴 Alta", label_date: "Fecha Límite", label_time: "Hora", btn_add_task: "➕ Agregar Tarea", placeholder_search: "Buscar tareas...", filter_all: "Todas las categorías", empty_state_title: "¡Todo despejado!", empty_state_text: "Añade una nueva tarea para empezar.", empty_search_title: "Sin resultados", empty_search_text: "No se encontraron tareas con ese filtro.", title_notifications: "🔔 Notificaciones", welcome_notification: "¡Bienvenido! Define tu primera tarea.", title_pomodoro: "🍅 Pomodoro", delete_modal_title: "⚠️ Confirmar eliminación", delete_modal_text: "¿Estás seguro de que quieres eliminar esta tarea?", btn_delete: "Eliminar", btn_cancel: "Cancelar", btn_reset: "Restaurar", edit_modal_title: "✏️ Editar Tarea", label_subtasks: "Sub-tareas", placeholder_subtask: "Añadir sub-tarea y presionar Enter", settings_title: "⚙️ Configuración", settings_theme: "Tema", theme_light: "Claro", theme_dark: "Oscuro", theme_ocean: "Océano", theme_forest: "Bosque", settings_language: "Idioma", settings_data: "Datos", btn_export: "Exportar", btn_import: "Importar", btn_save_changes: "Guardar", btn_close: "Cerrar", feedback_imported: "¡Datos importados con éxito!", feedback_error_import: "Error al importar el archivo.", toast_task_added: "Tarea agregada con éxito", toast_task_deleted: "Tarea eliminada", toast_task_updated: "Tarea actualizada", toast_task_rescheduled: "Tarea reprogramada", toast_achievement_unlocked: "🏆 ¡Logro Desbloqueado!", settings_pomodoro: "Pomodoro", pomo_work_duration: "Trabajo (min)", pomo_short_break_duration: "Descanso Corto (min)", pomo_long_break_duration: "Descanso Largo (min)", pomo_cycle_work: "¡A trabajar!", pomo_cycle_short: "Descanso corto", pomo_cycle_long: "Descanso largo", notification_title: "¡Tiempo!", notification_work_end: "¡Buen trabajo! Es hora de un descanso.", notification_break_end: "El descanso terminó. ¡De vuelta al trabajo!", label_recurrence: "Recurrencia", recur_none: "Ninguna", recur_daily: "Diaria", recur_weekly: "Semanal", recur_fortnightly: "Quincenal", recur_monthly: "Mensual", recur_business_days: "Días Hábiles (L-V)", pomo_task_title_prefix: "Enfocado en: ", label_notes: "Notas Adicionales", placeholder_notes: "Añade detalles, enlaces, etc.", dashboard_title: "📊 Dashboard de Productividad", dashboard_weekly_title: "Tareas Completadas (Últimos 7 Días)", dashboard_category_title: "Distribución por Categoría", dashboard_pomodoro_title: "Rendimiento de Pomodoros", dashboard_monthly_title: "Tareas Completadas (Últimos 30 Días)", day_sun: "Dom", day_mon: "Lun", day_tue: "Mar", day_wed: "Mié", day_thu: "Jue", day_fri: "Vie", day_sat: "Sáb", settings_achievements_title: "Logros", streak_days: "Días", settings_sound_theme: "Tema de Sonido", sound_classic: "Clásico", sound_digital: "Digital", sound_relaxing: "Relajante",
        settings_ui_customization: "Personalización de Interfaz", settings_font: "Fuente", font_sans_serif: "Moderna (Sans-Serif)", font_serif: "Clásica (Serif)", font_mono: "Técnica (Monoespaciada)", settings_accent_color: "Color de Acento", settings_general: "Configuración General",
        stats_title: "🏆 Metas y Estadísticas", stats_goals_title: "Metas Diarias", stats_daily_task_goal: "Meta de Tareas", stats_daily_pomo_goal: "Meta de Pomodoros", stats_details_title: "Estadísticas Detalladas", stat_streak: "Racha Actual", stat_today_tasks: "Tareas Hoy", stat_today_pomos: "Pomodoros Hoy", stat_avg_focus: "Foco Promedio", stat_top_category: "Categoría Top",
        notif_overdue: "Tienes {count} tarea(s) vencida(s).", notif_due_today: "Tienes {count} tarea(s) para hoy.", notif_due_tomorrow: "Hay {count} tarea(s) para mañana.", notif_all_clear: "¡Todo en orden! Sigue así. 👍", notif_streak: "¡Sigue así! Llevas una racha de {count} día(s).", notif_achievement: "¡Último logro: {achievement}!",
        ach_first_task_title: "Primer Paso", ach_first_task_desc: "Completa tu primera tarea.",
        ach_ten_tasks_title: " Imparable", ach_ten_tasks_desc: "Completa 10 tareas.",
        ach_first_pomo_title: "Maestro del Foco", ach_first_pomo_desc: "Completa un ciclo Pomodoro.",
        ach_perfectionist_title: "Perfeccionista", ach_perfectionist_desc: "Completa una tarea con sub-tareas.",
        ach_streak_3_title: "En Racha", ach_streak_3_desc: "Mantén una racha de 3 días.",
        ach_night_owl_title: "Ave Nocturna", ach_night_owl_desc: "Completa una tarea de madrugada.",
        calendar_today: "Hoy", calendar_month: "Mes", calendar_week: "Semana", calendar_list: "Lista"
    },
    en: { title: "🎯 TaskMaster Pro", subtitle: "Organize your day with intelligence", stat_total: "Total", stat_completed: "Completed", stat_pending: "Pending", stat_overdue: "Overdue", form_title: "What do you need to do today?", label_task: "Task", placeholder_task: "E.g.: Design the new logo (Shortcut: N)", label_category: "Category", cat_work: "💼 Work", cat_personal: "👤 Personal", cat_health: "🏃 Health", cat_study: "📚 Study", cat_other: "📋 Other", label_priority: "Priority", prio_low: "🟢 Low", prio_medium: "🟡 Medium", prio_high: "🔴 High", label_date: "Due Date", label_time: "Time", btn_add_task: "➕ Add Task", placeholder_search: "Search tasks...", filter_all: "All categories", empty_state_title: "All clear!", empty_state_text: "Add a new task to get started.", empty_search_title: "No results", empty_search_text: "No tasks were found with that filter.", title_notifications: "🔔 Notifications", welcome_notification: "Welcome! Define your first task.", title_pomodoro: "🍅 Pomodoro", delete_modal_title: "⚠️ Confirm Deletion", delete_modal_text: "Are you sure you want to delete this task?", btn_delete: "Delete", btn_cancel: "Cancel", btn_reset: "Reset", edit_modal_title: "✏️ Edit Task", label_subtasks: "Sub-tasks", placeholder_subtask: "Add sub-task and press Enter", settings_title: "⚙️ Settings", settings_theme: "Theme", theme_light: "Light", theme_dark: "Dark", theme_ocean: "Ocean", theme_forest: "Forest", settings_language: "Language", settings_data: "Data", btn_export: "Export", btn_import: "Import", btn_save_changes: "Save", btn_close: "Close", feedback_imported: "Data imported successfully!", feedback_error_import: "Error importing file.", toast_task_added: "Task added successfully", toast_task_deleted: "Task deleted", toast_task_updated: "Task updated", toast_task_rescheduled: "Task rescheduled", toast_achievement_unlocked: "🏆 Achievement Unlocked!", settings_pomodoro: "Pomodoro", pomo_work_duration: "Work (min)", pomo_short_break_duration: "Short Break (min)", pomo_long_break_duration: "Long Break (min)", pomo_cycle_work: "Time to work!", pomo_cycle_short: "Short break", pomo_cycle_long: "Long break", notification_title: "Time's Up!", notification_work_end: "Good job! Time for a break.", notification_break_end: "Break's over. Back to work!", label_recurrence: "Recurrence", recur_none: "None", recur_daily: "Daily", recur_weekly: "Weekly", recur_fortnightly: "Fortnightly", recur_monthly: "Monthly", recur_business_days: "Business Days (M-F)", pomo_task_title_prefix: "Focused on: ", label_notes: "Additional Notes", placeholder_notes: "Add details, links, etc.", dashboard_title: "📊 Productivity Dashboard", dashboard_weekly_title: "Tasks Completed (Last 7 Days)", dashboard_category_title: "Distribution by Category", dashboard_pomodoro_title: "Pomodoro Performance", dashboard_monthly_title: "Tasks Completed (Last 30 Days)", day_sun: "Sun", day_mon: "Mon", day_tue: "Tue", day_wed: "Wed", day_thu: "Thu", day_fri: "Fri", day_sat: "Sat", settings_achievements_title: "Achievements", streak_days: "Days", settings_sound_theme: "Sound Theme", sound_classic: "Classic", sound_digital: "Digital", sound_relaxing: "Relaxing",
        settings_ui_customization: "Interface Customization", settings_font: "Font", font_sans_serif: "Modern (Sans-Serif)", font_serif: "Classic (Serif)", font_mono: "Technical (Monospace)", settings_accent_color: "Accent Color", settings_general: "General Settings",
        stats_title: "🏆 Goals & Stats", stats_goals_title: "Daily Goals", stats_daily_task_goal: "Tasks Goal", stats_daily_pomo_goal: "Pomodoros Goal", stats_details_title: "Detailed Stats", stat_streak: "Current Streak", stat_today_tasks: "Tasks Today", stat_today_pomos: "Pomos Today", stat_avg_focus: "Avg. Focus", stat_top_category: "Top Category",
        notif_overdue: "You have {count} overdue task(s).", notif_due_today: "You have {count} task(s) due today.", notif_due_tomorrow: "{count} task(s) are due tomorrow.", notif_all_clear: "All clear! Keep it up. 👍", notif_streak: "Keep it up! You're on a {count} day streak.", notif_achievement: "Last achievement: {achievement}!",
        ach_first_task_title: "First Step", ach_first_task_desc: "Complete your first task.",
        ach_ten_tasks_title: "Unstoppable", ach_ten_tasks_desc: "Complete 10 tasks.",
        ach_first_pomo_title: "Focus Master", ach_first_pomo_desc: "Complete a Pomodoro cycle.",
        ach_perfectionist_title: "Perfectionist", ach_perfectionist_desc: "Complete a task with sub-tasks.",
        ach_streak_3_title: "On a Roll", ach_streak_3_desc: "Keep a 3-day streak.",
        ach_night_owl_title: "Night Owl", ach_night_owl_desc: "Complete a task in the small hours.",
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
    NIGHT_OWL: { id: 'ach_night_owl', icon: 'fa-moon', check: (app, task) => { const hour = new Date(task.completedAt).getHours(); return hour >= 0 && hour < 4; } }
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
        
        // MODIFICADO: Deep merge para evitar que las nuevas propiedades (como customization) se pierdan al cargar datos antiguos
        const loadedSettings = this.loadData('settings', {});
        this.settings = {
            ...defaultSettings,
            ...loadedSettings,
            pomodoro: { ...defaultSettings.pomodoro, ...loadedSettings.pomodoro },
            goals: { ...defaultSettings.goals, ...loadedSettings.goals },
            customization: { ...defaultSettings.customization, ...loadedSettings.customization },
        };
        
        this.gamificationData = { ...{ streak: { current: 0, lastCompletedDate: null }, unlockedAchievements: [] }, ...this.loadData('gamification', {}) };
        
        this.currentPomodoroTask = null; this.pomodoroInterval = null; this.isPomodoroRunning = false;
        this.pomodoroState = { type: 'work', time: this.settings.pomodoro.work * 60 };
        this.currentEditingTask = null; this.draggedTaskElement = null;
        this.charts = {}; this.calendar = null; this.currentView = 'list';
        this.commandPaletteIndex = -1;

        this.applySettings();
        this.initializeEventListeners();
        this.initializeCommands();
    }

    loadData(key, defaultValue) { try { const data = localStorage.getItem(`taskmaster-${key}`); return data ? JSON.parse(data) : defaultValue; } catch (e) { console.error(`Error loading data for key: ${key}`, e); return defaultValue; } }
    saveData(key, data) { localStorage.setItem(`taskmaster-${key}`, JSON.stringify(data)); }
    
    applySettings() {
        document.documentElement.setAttribute('data-theme', this.settings.theme);
        document.documentElement.lang = this.settings.language;

        const accentColor = this.settings.customization.accentColor || this.getDefaultAccentColor();
        document.documentElement.style.setProperty('--accent-color', accentColor);
        document.body.style.fontFamily = `var(--font-family-${this.settings.customization.fontFamily})`;
        
        document.getElementById('themeSelector').value = this.settings.theme;
        document.getElementById('languageSelector').value = this.settings.language;
        document.getElementById('soundThemeSelector').value = this.settings.soundTheme;
        document.getElementById('fontSelector').value = this.settings.customization.fontFamily;
        document.getElementById('accentColorPicker').value = accentColor;
        document.getElementById('accentColorValue').textContent = accentColor.toUpperCase();
        document.getElementById('pomodoroWork').value = this.settings.pomodoro.work;
        document.getElementById('pomodoroShortBreak').value = this.settings.pomodoro.short;
        document.getElementById('pomodoroLongBreak').value = this.settings.pomodoro.long;
        this.renderAll();
    }

    getDefaultAccentColor() {
        // Obtenemos el valor por defecto directamente de las variables CSS para el tema actual
        document.documentElement.style.setProperty('--accent-color-temp', `var(--accent-color-default)`);
        const color = getComputedStyle(document.documentElement).getPropertyValue('--accent-color-temp').trim();
        document.documentElement.style.removeProperty('--accent-color-temp');
        return color || '#4facfe'; // Fallback
    }

    // El resto de la clase... (showToast, playSound, etc. se mantienen igual)
// ... (Copiar el resto de la clase TaskMaster desde el mensaje anterior, ya que esa parte no cambia)
// ...
// --- Command Palette Logic --- (Todo esto se mantiene igual)
// ...
// --- Punto de entrada de la aplicación --- (Con el preloader)
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

    // Ocultar el preloader una vez que todo está cargado e inicializado
    preloader.classList.add('hidden');
});