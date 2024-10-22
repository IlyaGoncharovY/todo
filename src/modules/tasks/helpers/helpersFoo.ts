import {TaskType} from '../../../common/type';

/**
 * Проверка на доступность localStorage в текущем окружении.
 * @type {boolean}
 */
const isLocalStorageAvailable: boolean = typeof localStorage !== 'undefined';

/**
 * Получение задач (tasks) из локального хранилища.
 * @returns {TaskType[]} Массив задач, сохраненных в локальном хранилище. Возвращает пустой массив, если задач нет.
 */
export const loadTasksFromLocalStorage = (): TaskType[] => {
  if (isLocalStorageAvailable) {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }
  return [];
};

/**
 * Сохранение задач (tasks) в локальное хранилище.
 * @param {TaskType[]} tasksArr - Массив задач, которые необходимо сохранить.
 */
export const saveTasksToLocalStorage = (tasksArr: TaskType[]) => {
  if (isLocalStorageAvailable) {
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
  }
};
