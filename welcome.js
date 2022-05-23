import os from 'os'

export const func = () => {
    console.log(`Привет, юзер. Вижу ты зашел с ${os.type()}`);
}