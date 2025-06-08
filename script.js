<script>
class TaskMaster {
    constructor() {
        this.tasks = this.loadData('tasks', []);
        this.settings = this.loadData('settings', { theme: 'light', language: 'es' });
        this.currentPomodoroTask = null;
        this.isPomodoroRunning = false;
        this.pomodoroTime = 25 * 60;
        this.pomodoroInterval = null;
        this.draggedTask = null;

        this.applySettings();
        this.renderAll();
        this.initializeEventListeners();
    }

    // --- DATA & SETTINGS ---
    loadData(key, defaultValue) {
        try {
            const data = localStorage.getItem(`taskmaster-${key}`);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error(`Error loading data for key ${key}:`, e);
            return defaultValue;
        }
    }
    saveData(key, data) {
        localStorage.setItem(`taskmaster-${key}`, JSON.stringify(data));
    }
    applySettings() {
        document.documentElement.setAttribute('data-theme', this.settings.theme);
        // Language will be applied during render to avoid FOUC
    }

    // --- CORE RENDERING ---
    renderAll() {
        this.renderStats();
        this.renderTaskForm();
        this.renderTasks();
        this.checkWelcomeNotification();
    }

    renderStats() {
        // ... (Rendering logic for stats cards)
    }

    renderTaskForm() {
        // ... (Rendering logic for task form)
    }

    renderTasks() {
        const tasksList = document.getElementById('tasksList');
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const filterCat = document.getElementById('filterCategory').value;
        tasksList.innerHTML = '';

        const filteredTasks = this.tasks.filter(task => {
            const matchesSearch = task.title.toLowerCase().includes(searchTerm);
            const matchesFilter = filterCat === 'all' || task.category === filterCat;
            return matchesSearch && matchesFilter;
        });

        if (filteredTasks.length === 0) {
            tasksList.innerHTML = `<div class="empty-state"><h3>No hay tareas que coincidan</h3></div>`;
            return;
        }

        filteredTasks.forEach(task => {
            const taskEl = document.createElement('div');
            taskEl.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskEl.dataset.id = task.id;
            taskEl.draggable = true;
            if(task.id === this.currentPomodoroTask) taskEl.classList.add('pomodoro-active');

            // HTML structure for a task, including subtasks, progress, and action buttons
            // ...

            tasksList.appendChild(taskEl);
        });
    }

    checkWelcomeNotification() {
        document.getElementById('welcomeNotification').style.display = this.tasks.length > 0 ? 'none' : 'block';
    }

    // --- EVENT LISTENERS ---
    initializeEventListeners() {
        // Form submission
        // Search and Filter inputs
        // Modal buttons (Delete, Edit, Settings)
        // Pomodoro controls
        // Drag and Drop listeners on tasksList
    }

    // --- TASK ACTIONS ---
    addTask(formData) {
        const newTask = {
            id: `task-${Date.now()}`,
            title: formData.get('title'),
            category: formData.get('category'),
            // ... other properties
            subtasks: [],
            completed: false
        };
        this.tasks.unshift(newTask);
        this.saveData('tasks', this.tasks);
        this.renderAll();
    }
    
    // showEditModal, saveEditedTask, toggleSubtask, addSubtask, etc.
    // ...

    // --- DRAG AND DROP ---
    handleDragStart(e) {
        this.draggedTask = e.target;
        e.target.classList.add('dragging');
    }
    handleDragOver(e) {
        e.preventDefault();
        const afterElement = this.getDragAfterElement(e.clientY);
        const list = document.getElementById('tasksList');
        if (afterElement == null) {
            list.appendChild(this.draggedTask);
        } else {
            list.insertBefore(this.draggedTask, afterElement);
        }
    }
    handleDrop() {
        this.draggedTask.classList.remove('dragging');
        const newOrderIds = [...document.getElementById('tasksList').children].map(el => el.dataset.id);
        this.tasks.sort((a, b) => newOrderIds.indexOf(a.id) - newOrderIds.indexOf(b.id));
        this.saveData('tasks', this.tasks);
    }
    getDragAfterElement(y) {
        // Logic to find the element to drop before
        // ...
    }

    // --- DATA IMPORT/EXPORT ---
    exportData() {
        // ...
    }
    importData(file) {
        // ...
    }
    
    // --- POMODORO ---
    startPomodoroForTask(taskId) {
        this.currentPomodoroTask = taskId;
        this.renderTasks(); // Re-render to highlight
        this.startPomodoro();
    }
    // ... other pomodoro functions
}

document.addEventListener('DOMContentLoaded', () => {
    new TaskMaster();
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => console.log('ServiceWorker registration successful with scope: ', registration.scope))
            .catch(err => console.log('ServiceWorker registration failed: ', err));
    });
}
</script>
