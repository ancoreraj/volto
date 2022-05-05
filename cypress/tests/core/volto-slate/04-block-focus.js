import { slateBeforeEach, slateAfterEach } from '../../../support';

describe('Block Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('As editor I can add text and select parts of it and see the Slate Toolbar', function () {
    // Complete chained commands
    cy.getSlateEditorAndType('Colorless green ideas sleep furiously.');

    // select 'furiously'
    cy.setSlateSelection('furiously');

    cy.get('.slate-inline-toolbar').should('be.visible');

    // Save
    cy.toolbarSave();

    // then the page view should contain a link
    cy.contains('Colorless green ideas sleep furiously.');
  });
});
