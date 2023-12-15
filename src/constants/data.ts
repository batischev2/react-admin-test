import faceBook from "../shared/images/socials/facebook.png";
import instagram from "../shared/images/socials/instagram.png";
import whatsapp from "../shared/images/socials/whatsapp.png";
import { socialType } from "../types";

export const filterItems = [{
    title: "Товарная группа",
    options: [{
        name: "option",
        link: "#",
        id: 1
    },
        {
            name: "option",
            link: "#",
            id: 2
        },
        {
            name: "option",
            link: "#",
            id: 3
        }]
},
    {
        title: "Статус аукциона",
        options: [{
            name: "option",
            link: "#",
            id: 4
        },
            {
                name: "option",
                link: "#",
                id: 5
            },
            {
                name: "option",
                link: "#",
                id: 6
            }]
    },
    {
        title: "Новая заявка",
        options: [{
            name: "option",
            link: "#",
            id: 7
        },
            {
                name: "option",
                link: "#",
                id: 8
            },
            {
                name: "option",
                link: "#",
                id: 9
            }]
    },
    {
        title: "Выбрать период",
        options: [{
            name: "option",
            link: "#",
            id: 10
        },
            {
                name: "option",
                link: "#",
                id: 11
            },
            {
                name: "option",
                link: "#",
                id: 12
            }]
    }];

export const socials:socialType[] = [
    {
        name: "faceBook",
        img: faceBook,
        href: "#"
    },
    {
        name: "instagram",
        img: instagram,
        href: "#"
    },
    {
        name: "whatsapp",
        img: whatsapp,
        href: "#"
    },
];

export const navigationItems = ["Аукционы", "Поставщики", "Одобрение заявок"]

