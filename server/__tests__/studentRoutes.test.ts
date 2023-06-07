import request from 'supertest';
import app from '../mock-server';



describe ("Testing GET /students route", () => {
    const students = [
        {
            first_name: "Wesley",
            last_name: "Waters",
            classroom_id: 1,
            num_claps: 0
        },
        {
            first_name: "Jonah",
            last_name: "Weinbaum",
            classroom_id: 1,
            num_claps: 0
        },
        {
            first_name: "Jessica",
            last_name: "Vo",
            classroom_id: 2,
            num_claps: 0
        }
    ]

    // beforeAll( async () => {
    //     await request(app).post('/students').send(students)
    // })

    //should call the endpoint /students with a get request
    //should return a status of 200
    //should return a list of students
    it("should return 200", async () => {
        
        const response = await request(app).get('/students')
        expect(response.statusCode).toBe(200);
    })

    it("should return with a header containing the type of 'application/json'", async () => {
        const response = await request(app).get('/students')
        expect(response.headers['content-type']).toContain('json');

    })

    it("should return a list of students", async () => {
        const response = await request(app).get('/students')
        expect(response.body.length > 1).toBe(true)
    })
})


