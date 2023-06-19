import React from 'react';
import { Flex } from '@shared/ui/flex';

export const News = () => {
  return (
    <Flex className="flex__column flex__gap-sm">
      <h4>Следите за новостями</h4>
      <span>
        Присоединяйтесь к сообществу организаторов: делимся опытом, новостями и
        вдохновением.
      </span>
      <Flex className="flex__gap-sm">
        <a href="https://t.me/rebenokFrameworka" target="_blank">
          <img
            src="https://api.iconify.design/ic:baseline-telegram.svg?color=%23888888"
            alt="telegram"
            className="footer__news-img"
          />
        </a>
        <a href="https://groshidze.tech/" target="_blank">
          <img
            src="https://api.iconify.design/mdi:vk-circle.svg?color=%23888888"
            alt="vk"
            className="footer__news-img"
          />
        </a>
      </Flex>
    </Flex>
  );
};
