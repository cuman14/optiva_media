import * as fromGraphicsMethod from './graphics-method.actions';

describe('actionGraphicsMethods', () => {
  it('should return an action', () => {
    expect(fromGraphicsMethod.actionGraphicsMethods().type).toBe('[GraphicsMethod] Action GraphicsMethods');
  });
});
