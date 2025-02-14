import useStore from "@src/store/store";
import { fetchData } from "@src/store/defaults"; // Импортируем функцию для загрузки данных



// Функция для загрузки новых сообщений (вызывает внутренню функцию)
export const loadNewMessages = async (position = "top", force_update = false) => {
  const store = useStore();

  // Проверяем текущую позицию из хранилища и загружаем новые сообщения 
  const userId = store.user?.position.userId ?? null;

  // Принудительное обновление хранилища
  if (force_update == true) {
    if (position == "top" && store.user.position.page > 1){
        let page = store.user.position.page = (store.user.position.page - 1)
    }
    if (position == "bottom"){
        let page = store.user.position.page = (store.user.position.page + 1)
    }
  }

  const page = store.user?.position.page ?? null;

  try {
    const response = await fetchData(userId, page, position); // Используем существующую функцию fetchData
    
    store.conversations = (response.data.conversations); // Обновляем список сообщений

    store.$patch({
        conversations: response.data.conversations,
    });

    console.log("Update messages");
  } catch (error) {
    console.error("Ошибка при загрузке сообщений:", error);
  }
};

// Запуск интервала для обновления сообщений
const startMessagePolling = () => {
  setInterval(loadNewMessages, 60000); // Обновляем каждые 5 секунд
};

// Запускаем интервал при инициализации хранилища
startMessagePolling();