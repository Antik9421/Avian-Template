import { getChat } from "@src/store/adaptor";


export const defaultSettings = [
  {
    lastSeen: false,
    readReceipt: false,
    joiningGroups: false,
    privateMessages: false,
    darkMode: false,
    borderedTheme: false,
    allowNotifications: false,
    keepNotifications: false,
  },
];

// контакты пользователя (типа адресная книга) (нигде не используется)
export const user = {
  id: null,
  firstName: "Dawn",
  lastSeen: new Date(),
  lastName: "Sabrina",
  email: "sabrina@gmail.com",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  token: "fakeToken",
  contacts: [
    {
      id: 2,
      email: "user@gmail.com",
      firstName: "Ahmed",
      lastName: "Ali",
      lastSeen: new Date(),
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 10,
      email: "user@gmail.com",
      firstName: "Fung",
      lastName: "Sheng",
      lastSeen: new Date(),
      avatar:
        "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?cs=srgb&dl=pexels-charles-1851164.jpg&fm=jpg",
    },
  ],
  position: {
    userId: null,
    page: 1,
  },
};

export const conversations = [
  {
    id: 1,
    type: "group",
    name: "Публичный Чат Perdos",
    avatar:
      "#",
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
      // {
      //   id: 1,
      //   content: "Привет дрочим",
      //   date: "1:00 pm",
      //   state: "read",
      //   sender: {
      //     id: 1,
      //     firstName: "Dawn",
      //     lastName: "Sabrina",
      //     lastSeen: new Date(),
      //     email: "sabrina@gmail.com",
      //     avatar:
      //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      //   },
      // },
      // {
      //   id: 2,
      //   content: "Давай",
      //   date: "2:00 pm",
      //   state: "read",
      //   sender: {
      //     id: 2,
      //     email: "user@gmail.com",
      //     firstName: "Ahmed",
      //     lastName: "Ali",
      //     lastSeen: new Date(),
      //     avatar:
      //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      //   },
      // },
      // {
      //   id: 5,
      //   content: "Ловите фотки",
      //   date: "5:00 pm",
      //   state: "delivered",
      //   sender: {
      //     id: 1,
      //     firstName: "Dawn",
      //     lastName: "Sabrina",
      //     lastSeen: new Date(),
      //     email: "sabrina@gmail.com",
      //     avatar:
      //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      //   },
      //   attachments: [
      //     {
      //       id: 3,
      //       type: "image",
      //       name: "mountain.jpg",
      //       size: "20 MB",
      //       url: "https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      //     },
      //     {
      //       id: 2,
      //       type: "image",
      //       name: "pumkins.jpg",
      //       size: "20 MB",
      //       url: "https://images.unsplash.com/photo-1664031315855-955dbca83172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      //     },
      //     {
      //       id: 1,
      //       type: "image",
      //       name: "forest.jpg",
      //       size: "20 MB",
      //       url: "https://images.unsplash.com/photo-1664021975758-78d83898225d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      //     },
      //   ],
      //   replyTo: 4,
      // },
      
    ],
  },
];

export const archive = [
  {
    id: 3,
    type: "couple",
    draftMessage: "",
    contacts: [
      {
        id: 4,
        email: "user@gmail.com",
        firstName: "Dawn",
        lastName: "Sabrina",
        lastSeen: new Date(),
        avatar:
          "#",
      },
      {
        id: 1,
        firstName: "Dawn",
        lastName: "Sabrina",
        lastSeen: new Date(),
        email: "sabrina@gmail.com",
        avatar:
          "#",
      },
    ],
    messages: [
      {
        id: 1,
        content: "Oh, ok good to know.",
        date: "4:00 pm",
        state: "read",
        sender: {
          id: 1,
          firstName: "Dawn",
          lastName: "Sabrina",
          lastSeen: new Date(),
          email: "sabrina@gmail.com",
          avatar:
            "#",
        },
      },
    ],
  },

  {
    id: 4,
    type: "couple",
    draftMessage: "",
    contacts: [
      {
        id: 3,
        email: "user@gmail.com",
        firstName: "Allen",
        lastName: "Carr",
        lastSeen: new Date(),
        avatar:
          "#",
      },
      {
        id: 1,
        firstName: "Dawn",
        lastName: "Sabrina",
        lastSeen: new Date(),
        email: "sabrina@gmail.com",
        avatar:
          "#",
      },
    ],
    messages: [
      {
        id: 1,
        content: "Oh, ok good to know.",
        date: "4:00 pm",
        state: "read",
        sender: {
          id: 1,
          firstName: "Dawn",
          lastName: "Sabrina",
          lastSeen: new Date(),
          email: "sabrina@gmail.com",
          avatar:
            "#",
        },
      },
    ],
  },
];

// список нотификаций нигде не используется
export const notifications = [
  {
    flag: "security",
    title: "Recent Login",
    message: "there was a recent login to you account from this device",
  },
  // {
  //   flag: "added-to-group",
  //   title: "New Group",
  //   message: "Your friend added you to a new group",
  // },
  // {
  //   flag: "account-update",
  //   title: "Password Reset",
  //   message: "Your password has been restored successfully",
  // },
  // {
  //   flag: "security",
  //   title: "Recent Login",
  //   message: "there was a recent login to you account from this device",
  // },
  // {
  //   flag: "added-to-group",
  //   title: "New Group",
  //   message: "Your friend added you to a new group",
  // },
];

// Список вызовов нигде не используется
export const calls = [
  {
    id: 1,
    type: "voice",
    status: "missed",
    direction: "incoming",
    date: "Dec 12, 2020",
    length: "01:12",
    members: [
      {
        id: 1,
        firstName: "Dawn",
        lastName: "Sabrina",
        lastSeen: new Date(),
        email: "sabrina@gmail.com",
        avatar:
          "#",
      },
      {
        id: 2,
        email: "user@gmail.com",
        firstName: "Ahmed",
        lastName: "Ali",
        lastSeen: new Date(),
        avatar:
          "#",
      },
    ],
    adminIds: [1],
  },

  {
    id: 3,
    type: "voice",
    status: "sent",
    direction: "outgoing",
    date: "Dec 12, 2020",
    length: "01:12",
    members: [
      {
        id: 1,
        firstName: "Dawn",
        lastName: "Sabrina",
        lastSeen: new Date(),
        email: "sabrina@gmail.com",
        avatar:
          "#",
      },
      {
        id: 5,
        email: "user@gmail.com",
        firstName: "Dylan",
        lastName: "Billy",
        lastSeen: new Date(),
        avatar:
          "#",
      },
    ],
    adminIds: [1],
  },
];

// список активных вызовов (нигде не используется)
export const activeCall = {
  id: 6,
  type: "voice",
  status: "dialing",
  direction: "outgoing",
  date: "Dec 12, 2020",
  length: "01:12",
  members: [
    {
      id: 1,
      firstName: "Dawn",
      lastName: "Sabrina",
      lastSeen: new Date(),
      email: "sabrina@gmail.com",
      avatar:
        "#",
    },
    {
      id: 8,
      email: "user@gmail.com",
      firstName: "Evelyn",
      lastName: "Billy",
      lastSeen: new Date(),
      avatar:
        "#",
    },
  ],
  adminIds: [1],
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

import useStore from "@src/store/store";
export const fetchData = async (userId : number | null, page: number, position = "bottom") => {
  await delay(1000);
  const store = useStore();

  const new_conversation = await getChat(userId, page);

  // ищем userId или вставляем в публичный чат
  let conversationIndex = store.conversations.findIndex(conversation => conversation.id === store.user?.position.userId);
  if (conversationIndex === -1){
    conversationIndex = 0;
  }

  // Merge and add only if the message ID is unique
  let existingMessageIds = new Set();
  if (conversationIndex in conversations){
    existingMessageIds = new Set(conversations[conversationIndex]["messages"].map((msg) => msg.id));
  }

  const uniqueMessages = new_conversation[conversationIndex]["messages"].filter((msg) => !existingMessageIds.has(msg.id));

  // Создаем новый массив чтобы vue подгрузил его (в начало или конец зависит от позиции)
  let new_message;
  if (position == "bottom") {
    new_message = [...store.conversations[conversationIndex].messages, ...uniqueMessages];
  } else {
    new_message = [...uniqueMessages, ...store.conversations[conversationIndex].messages];
  }

  const existingIds = store.conversations.map(conversation => conversation.id);
  const newConversations = new_conversation.filter(conversation => !existingIds.includes(conversation.id));
  store.conversations.push(...newConversations);

  conversationIndex = store.conversations.findIndex(conversation => conversation.id === store.user?.position.userId);
  if (conversationIndex === -1){
    conversationIndex = 0;
  }

  store.conversations[conversationIndex]["messages"] = new_message;




  // console.log("List", [...store.conversations, ...new_conversation])

  // //store.conversations = [store.conversations[0], ...new_conversation.slice(1)];
  // store.conversations.push(...new_conversation.slice(1));
    
  // ищем userId или вставляем в публичный чат
  // conversationIndex = store.conversations.findIndex(conversation => conversation.id === store.user?.position.userId);
  // if (conversationIndex === -1){
  //   conversationIndex = 0;
  // }

  
  
  return await {
    data: {
      user: user,
      conversations: conversations,
      notifications: notifications,
      archivedConversations: archive,
    },
  };
};

export const updateAccount = async () => {
  await delay(4000);

  return await {
    data: {
      detail: "Your account has been updated successfully",
    },
  };
};

// Вложения (нигде не используются)
export const attachments = [
  
  {
    id: 9,
    type: "file",
    name: "lecture-10.pdf",
    size: "52.4 MB",
    url: "#",
  },
  {
    id: 10,
    type: "video",
    name: "fun-video.mp4",
    size: "11.4 MB",
    url: "#",
  },
];

export default {
  defaultSettings,
  archive,
  conversations,
  notifications,
  calls,
  activeCall,
  user,
} as const;
