export default {
    parent: {
        name: {
            name: 'vornameeltern',
            label: 'Vorname',
            type: 'text',
            id: 'vorname-eltern',
            placeholder: 'Vorname',
            validation: {
                required: {
                    value: true,
                    message: 'Erforderlich',
                },
            },
        },
        surname: {
            name: 'nachnameeltern',
            label: 'Nachname',
            type: 'text',
            id: 'nachname-eltern',
            placeholder: 'Nachname',
            validation: {
                required: {
                    value: true,
                    message: 'Erforderlich',
                },
            },
        }
    },
    mobile: {
        name: 'mobile',
        label: 'Telefonnummer',
        type: 'text',
        id: 'mobile',
        placeholder: 'Telefonnummer',
        validation: {
            required: {
                value: true,
                message: 'Erforderlich',
            },
        },
    },
    email: {
        name: 'email',
        label: 'Email-Adresse',
        type: 'email',
        id: 'email',
        placeholder: 'Email-Adresse',
        validation: {
            required: {
                value: true,
                message: 'Erforderlich',
            },
        },
    },
    child: {
        name: {
            name: 'vornamekind',
            label: 'Vorname\u0020Kind',
            type: 'text',
            id: 'vorname-kind',
            placeholder: 'Vorname',
            validation: {
                required: {
                    value: true,
                    message: 'Erforderlich',
                },
            },
        },
        surname: {
            name: 'nachnamekind',
            label: 'Nachname\u0020Kind',
            type: 'text',
            id: 'nachname-kind',
            placeholder: 'Nachname',
            validation: {
                required: {
                    value: true,
                    message: 'Erforderlich',
                },
            },
        }
    },
    birthday: {
        name: 'geburtstag',
        label: 'Geburtstag',
        type: 'date',
        id: 'geburtstag',
        small: 'true',
        placeholder: '',
        validation: {
            required: {
                value: true,
                message: 'Erforderlich',
            },
        },
    },
    start: {
        name: 'start',
        label: 'Betreuungsstart',
        type: 'date',
        id: 'start',
        small: 'true',
        placeholder: '',
        validation: {
            required: {
                value: true,
                message: 'Erforderlich',
            },
        },
    },
    end: {
        name: 'ende',
        label: 'Betreuungsende',
        type: 'date',
        id: 'ende',
        small: 'true',
        placeholder: '',
        validation: {
            required: {
                value: true,
                message: 'Erforderlich',
            },
        },
    },
    street: {
        name: 'strasse',
        label: 'Stra\u00DFe',
        type: 'text',
        id: 'straße',
        placeholder: 'Straße',
        validation: {
            required: {
                value: true,
                message: 'Erforderlich',
            },
        },
    },
    number: {
        name: 'hausnummer',
        label: 'Hausnummer',
        type: 'tel',
        id: 'hausnummer',
        placeholder: 'Hausnummer',
        small: 'true',
        validation: {
            required: {
                value: true,
                message: 'Erforderlich',
            },
        },
    },
    city: {
        name: 'stadt',
        label: 'Stadt',
        type: 'text',
        id: 'stadt',
        placeholder: 'Stadt',
        validation: {
            required: {
                value: true,
                message: 'Erforderlich',
            },
        },
    },
    plz: {
        name: 'plz',
        label: 'Postleitzahl',
        type: 'text',
        id: 'plz',
        placeholder: 'Postleitzahl',
        small: 'true',
        validation: {
            required: {
                value: true,
                message: 'Erforderlich',
            },
        },
    },
    textarea: {
        name: 'textarea',
        label: 'Pers\u00f6nliche\u0020Nachricht\u0020/\u0020Hinweise\u0020/\u0020Anmerkungen',
        id: 'sonstiges',
        textarea: 'true',
        type: "textarea",
        placeholder: 'Deine Nachricht hier...',
        small: 'true',
    }
}