document.addEventListener('DOMContentLoaded', () => {
    // 1️⃣ تحديد عناصر الصفحة
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2️⃣ دالة إضافة مهمة
    function addTask() {
        const taskText = taskInput.value.trim(); // إزالة المسافات من البداية والنهاية

        // التحقق إذا كان الإدخال فارغ
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // إنشاء عنصر <li> للنص
        const li = document.createElement('li');
        li.textContent = taskText;

        // إنشاء زر الحذف
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // حدث الحذف عند الضغط على الزر
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // دمج الزر مع عنصر li
        li.appendChild(removeBtn);

        // إضافة li للقائمة
        taskList.appendChild(li);

        // مسح حقل الإدخال
        taskInput.value = "";
    }

    // 3️⃣ إضافة المهمة عند الضغط على الزر
    addButton.addEventListener('click', addTask);

    // 4️⃣ إضافة المهمة عند الضغط على Enter
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
