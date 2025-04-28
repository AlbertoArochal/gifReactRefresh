import {GifGridItem} from "../../src/components/index.js";
import {render} from "@testing-library/react";
import {screen} from "@testing-library/dom";

describe('Pruebas en gifGridItem', () => {
    const title = 'One Punch';
    const url = 'https://sm.ign.com/t/ign_latam/screenshot/default/chechi_ewwz.1280.jpg'
    test("debe hacer match con el snapshot", () => {


        const {container} = render(<GifGridItem title={title} url={url} />)
        expect(container).toMatchSnapshot();


        }
    )
    test(
        "debe mostrart la imagen", () => {
            render(<GifGridItem title={title} url={url} />)

            expect(screen.getByRole('img').src).toBe(url)
        }
    )
    test(
        "debe mostrar el titulo", () => {
            render(<GifGridItem title={title} url={url} />)
        }
    )
});