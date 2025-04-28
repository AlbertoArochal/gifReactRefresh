import {getGifs} from "../../src/helpers/getGifs";


describe('Tests sobre getGifs helper', () => {
    test('debe retornar un array de gifs', async() => {
        const gifs = await getGifs("lady gaga");
        expect(gifs.length).toBeGreaterThanOrEqual(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })
});