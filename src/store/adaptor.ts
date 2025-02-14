import useStore from "@src/store/store";

const BASE_DOMAIN = "/proxy";

export const getChat = async (userId: number | null, page: number): Promise<any> => {
  if (userId === 1){
    userId = null
  }
  try {
    const response = await fetch(`${BASE_DOMAIN}/mashina_besedka?${(userId != null) ? `user=${userId}&` : ''}page=${page}`);
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
          id: Math.floor(Math.random() * 9999999999999), // ID отправителя
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
          id: Math.floor(Math.random() * 9999999999999),
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

    // Получаем DOM с user 
    const conversations = getConversations(doc.querySelectorAll("#mb_onlineUserList .uList"));

    conversations[0]["messages"] = output;

    return conversations;
  } catch (error) {
    console.error("Ошибка при получении чата:", error);
    return null;
  }
};

const getConversations = (onlineUserList: NodeListOf<Element>) => {
  const conversations = [{
    id: 1,
    type: "group",
    name: "Публичный Чат Perdos",
    avatar:
      "/proxy/img/logotip-2020.png",
    admins: [1],
    draftMessage: "",
    contacts: [
      // Тут похоже нужно всех добавлять или пренебречь этим
      {
        id: 1,
        firstName: "Уастник чата",
        lastName: "Sabrina",
        lastSeen: new Date(),
        email: "sabrina@gmail.com",
        avatar:
          "#",
      },
    ],
    messages: [
      {
          id: Math.floor(Math.random() * 9999999999999),
          content: "#",
          date: "1:00 pm",
          state: "read",
          sender: {
            id: Math.floor(Math.random() * 9999999999999),
            firstName: "Dawn",
            lastName: "Sabrina",
            lastSeen: new Date(),
            email: "sabrina@gmail.com",
            avatar:
              "#",
          },
      },
    ]
  }];

  onlineUserList.forEach((el) => {
    const userId = el.querySelector("a")?.getAttribute("href")?.replace("/mashina_besedka?user=", "");
    if (userId) {
      const sex = el.querySelector("a").getAttribute("class").replace("userlist userList", "").replace("e","a").toLowerCase()
      conversations.push({
        id: parseInt(userId),
        type: "group",
        name: el.querySelector("a")?.textContent ?? "" + el.getAttribute("class")?.replace("uList cu-", "") ?? "" + el.querySelector("a")?.getAttribute("class")?.replace("userlist userList", "") ?? "",
        avatar: `/proxy/files/ava/standart/${sex}.jpg`,
        admins: [1],
        draftMessage: "",
        contacts: [],
        messages: [
          {
            id: Math.floor(Math.random() * 9999999999999),
            content: "#",
            date: "1:00 pm",
            state: "read",
            sender: {
              id: Math.floor(Math.random() * 9999999999999),
              firstName: "Dawn",
              lastName: "Sabrina",
              lastSeen: new Date(),
              email: "sabrina@gmail.com",
              avatar:
                "#",
            },
          },
        ]
      });

    }
  });

  return conversations
}

