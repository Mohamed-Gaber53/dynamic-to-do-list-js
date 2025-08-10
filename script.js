document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // إنشاء عنصر li
        const li = document.createElement('li');
        li.textContent = taskText;

        // إنشاء زر الحذف
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn'; // بدون classList.add

        // حذف العنصر عند الضغط
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // إضافة الزر إلى العنصر
        li.appendChild(removeBtn);

        // إضافة العنصر للقائمة
        taskList.appendChild(li);

        // مسح الإدخال
        taskInput.value = "";
    }

    // الضغط على الزر
    addButton.addEventListener('click', addTask);

    // الضغط على Enter
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
