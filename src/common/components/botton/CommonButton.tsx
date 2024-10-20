import {FC, memo} from 'react';

import {FilterType} from '../../type';

import s from './CommonButton.module.css';

interface ICommonButton {
    title?: FilterType,
    handlerChangeFilter?: (filter: FilterType) => void,
    titleForDelete?: 'Clear completed',
    handlerDelete?: () => void,
    isActive?: boolean
}

/**
 * Универсальный эмулятор кнопки.
 * @param {ICommonButton} props - props для CommonButton.
 * @param {string} [props.title] - опционально title для фильтрующик кнопок.
 * @param {(filter: FilterType) => void} [props.handlerChangeFilter] - опционально функция для сета фильтра.
 * @param {'Clear completed'} [props.titleForDelete] - опционально title для удаляющей кнопки.
 * @param {() => void} [props.handlerDelete] - функция для удаления элементов.
 * @param {boolean} [props.isActive] - статус для выделения активной кнопки.
 * @constructor.
 */
export const CommonButton: FC<ICommonButton> = memo(({
  title,
  handlerChangeFilter,
  titleForDelete,
  handlerDelete,
  isActive,
}) => {

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (handlerChangeFilter && title) {
        handlerChangeFilter(title);
      } else if (handlerDelete) {
        handlerDelete();
      }
    }
  };

  const onClickHandler = () => {
    if (handlerChangeFilter && title) {
      handlerChangeFilter(title);
    } else if (handlerDelete) {
      handlerDelete();
    }
  };

  return (
    <div
      className={`${s.commonButtonContainer} ${isActive ? s.active : ''}`}
      onClick={onClickHandler}
      onKeyPress={onKeyPressHandler}
      tabIndex={0}
      role="button"
      aria-label={title || titleForDelete}
    >
      <p>{title || titleForDelete}</p>
    </div>
  );
});
