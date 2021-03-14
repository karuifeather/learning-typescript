import { User, UserProps } from '../models/User';
import { CollectView } from './CollectionView';
import { UserShow } from './UserShow';

export class UserList extends CollectView<User, UserProps> {
  renderItem(model: User, parentItem: Element): void {
    new UserShow(parentItem, model).render();
  }
}
