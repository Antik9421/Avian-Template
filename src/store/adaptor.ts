const BASE_DOMAIN = "/proxy";

export const getLastPublicChat = async (): Promise<any> => {
  let ownUserId = 6;

  try {
    const response = await fetch(`${BASE_DOMAIN}/mashina_besedka`);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const messages = doc.querySelectorAll(".chat-msg"); // Получаем контейнеры сообщений

    const output = Array.from(messages).map((message) => {
      const text =
        message.querySelector(".chat-msg-text")?.textContent?.trim() || ""; // Извлекаем текст, обрабатываем null
      const time =
        message.querySelector(".chat-msg-time")?.textContent?.trim() || ""; // Извлекаем время, обрабатываем null

      const senderElement = message.querySelector(".chat-msg-autor"); // Контейнер отправителя
      const atachmentsElement = message.querySelector(".chat-msg-img a img"); // Контейнер отправителя

      let sender = {};
      if (senderElement) {
        // Проверяем, есть ли элемент отправителя
        sender = {
          id: Math.floor(Math.random() * 5) + 0, // ID отправителя
          email: null, // email отправителя
          firstName:
            message.querySelector(".chat-msg-autor a")?.textContent?.trim() ||
            null, // Имя отправителя
          lastName:
            message.querySelector(".chat-msg-autor a")?.textContent?.trim() ||
            null, // Имя отправителя
          lastSeen: new Date(), // Текущее время
          avatar:
            `${BASE_DOMAIN}` +
              message
                .querySelector(".chat-msg-ava img")
                ?.src.replace(/^https?:\/\/[^\/]+/, "") || null, // Аватар отправителя
        };
      }
      let attachments = [];
      if (atachmentsElement) {
        // Проверяем, есть ли элемент отправителя
        const path = `${BASE_DOMAIN}${message
          .querySelector(".chat-msg-img a img")
          .src.replace(/^https?:\/\/[^\/]+/, "")
          .replace("_min", "")}`;

        const name = message
          .querySelector(".chat-msg-img a img")
          .src.split("/")
          .pop();

        attachments[0] = {
          id: Math.floor(Math.random() * 90000000) + 1000000,
          type: "image",
          name: name,
          size: "",
          url: path,
        };
      }

      return {
        id: parseInt(message.id.replace("comment_", "")) || null, // ID сообщения
        content: text,
        date: time,
        state: message.dataset.messageState || "unread", // Статус сообщения
        sender: sender,
        attachments: attachments,
        replyTo: Math.floor(Math.random() * 5) + 0,
      };
    });

    return output;
  } catch (error) {
    console.error("Ошибка при получении чата:", error);
    return null;
  }
};
