import { getLastPublicChat } from "@src/store/adaptor";


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
  id: 1,
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
};

export const conversations = [
  {
    id: 1,
    type: "group",
    name: "Публичный Чат Perdos",
    avatar:
      "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
    ],
    messages: [
      {
        id: 1,
        content: "Привет дрочим",
        date: "1:00 pm",
        state: "read",
        sender: {
          id: 1,
          firstName: "Dawn",
          lastName: "Sabrina",
          lastSeen: new Date(),
          email: "sabrina@gmail.com",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
      },
      {
        id: 2,
        content: "Давай",
        date: "2:00 pm",
        state: "read",
        sender: {
          id: 2,
          email: "user@gmail.com",
          firstName: "Ahmed",
          lastName: "Ali",
          lastSeen: new Date(),
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
      },
      {
        id: 5,
        content: "Ловите фотки",
        date: "5:00 pm",
        state: "delivered",
        sender: {
          id: 1,
          firstName: "Dawn",
          lastName: "Sabrina",
          lastSeen: new Date(),
          email: "sabrina@gmail.com",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        attachments: [
          {
            id: 3,
            type: "image",
            name: "mountain.jpg",
            size: "20 MB",
            url: "https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          },
          {
            id: 2,
            type: "image",
            name: "pumkins.jpg",
            size: "20 MB",
            url: "https://images.unsplash.com/photo-1664031315855-955dbca83172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
          {
            id: 1,
            type: "image",
            name: "forest.jpg",
            size: "20 MB",
            url: "https://images.unsplash.com/photo-1664021975758-78d83898225d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          },
        ],
        replyTo: 4,
      },
      
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
          "https://images.unsplash.com/photo-1657214059233-5626b35eb349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      },
      {
        id: 1,
        firstName: "Dawn",
        lastName: "Sabrina",
        lastSeen: new Date(),
        email: "sabrina@gmail.com",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
          "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        id: 1,
        firstName: "Dawn",
        lastName: "Sabrina",
        lastSeen: new Date(),
        email: "sabrina@gmail.com",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 2,
        email: "user@gmail.com",
        firstName: "Ahmed",
        lastName: "Ali",
        lastSeen: new Date(),
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        id: 5,
        email: "user@gmail.com",
        firstName: "Dylan",
        lastName: "Billy",
        lastSeen: new Date(),
        avatar:
          "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 8,
      email: "user@gmail.com",
      firstName: "Evelyn",
      lastName: "Billy",
      lastSeen: new Date(),
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ],
  adminIds: [1],
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchData = async () => {
  await delay(2000);

  // conversations[0]["messages"] = getLastPublicChat()
  const messages = await getLastPublicChat()

  conversations[0]["messages"] = messages

  // console.log("fetchdeata", user, conversations)


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
    url: "https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 10,
    type: "video",
    name: "fun-video.mp4",
    size: "11.4 MB",
    url: "https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
