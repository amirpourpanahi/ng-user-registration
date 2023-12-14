import { User } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('Name','Email','Bio')).toBeTruthy();
  });
});
