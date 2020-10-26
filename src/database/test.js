const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-25.4264722",
        lng: "-49.3695867",
        name: "Lar de amor",
        description: "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de resico e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1573449595343-f5e436ae1091?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1567791124560-c60b7d227623?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends : "1"
    })

    // consultar dados da tabela    
    const selected = await db.all(`SELECT * FROM orphanages`)
    console.log(selected) 

    // consultar somente 1 orphanato, pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

})