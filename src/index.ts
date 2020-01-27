class MedicalPerson {
    public id: number;
    constructor(id: number) {
        this.id = id;
    }

    public reportID(): void {
        console.log(`Hi all I am ${this.id}`);
    }
}

let mp = new MedicalPerson(100);
mp.reportID();