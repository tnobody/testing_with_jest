import { AppComponent } from "../components/app.component";
import { bind } from "hyperhtml";

describe(AppComponent.name, () => {

    let app: AppComponent;
    beforeEach(() => {
        app = new AppComponent();
    });

    describe('with HTML-binding', () => {
        beforeEach(() => bind(document.body)`${app}`)
      
        it('should show overlay when you lose', () => {
            app.lose();
            expect(document.querySelector('.overlay')).not.toBeNull();
        });

    });

})