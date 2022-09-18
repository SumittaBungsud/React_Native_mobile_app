import Realm from "realm"

const TaskSchema = {
    name: "Task",
    properties: {
    _id: "int",
    date: "string",
    task: "string?",
    },
    primaryKey: "_id",
};

const realm = await Realm.open({
    path: "myrealm",
    schema: [TaskSchema],
});

export default function database() {
    
    let task1, task2
    realm.write(() => {
        task1 = realm.create("Task", {
        _id: 1,
        date: "13/09/22",
        task: "go grocery shopping",
        });
        task2 = realm.create("Task", {
        _id: 2,
        date: "13/09/22",
        task: "go exercise",
        });
        console.log(`created two tasks: ${task1.task} & ${task2.task}`);
    });

    const tasks = realm.objects("Task");
    console.log(`The lists of tasks are: ${tasks.map((task) => task.task+' '+task.date+' '+task._id)}`);

}