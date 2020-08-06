import Component from '@glimmer/component';
import { action } from '@ember/object';
import {
  EbmmConfirmPayload,
  EbmmDeclinePayload,
  EbmmModalOptions
} from '../../services/modals-manager';

export interface ModalArgs {
  modalIsOpened: boolean;
  options: EbmmModalOptions;
  onConfirm: (v: EbmmConfirmPayload) => void;
  onDecline: (v: EbmmDeclinePayload) => void;
}

export default class BaseModal extends Component<ModalArgs> {
  @action
  confirm(v: EbmmConfirmPayload): void {
    this.args.onConfirm(v);
  }

  @action
  decline(v: EbmmDeclinePayload): void {
    this.args.onDecline(v);
  }
}
