/*
Copyright © 2024 kyteidev.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

import path from "path-browserify";
import { fs } from "@tauri-apps/api";
import { appDataDir } from "@tauri-apps/api/path";

const currentTime = new Date();
let logFileName: string;

export const initLogger = () => {
  logFileName = `Log-${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${currentTime.getDate()}-${currentTime.getDay()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}.log`;
};

export const logger = async (error: boolean, file: string, message: string) => {
  const appLogDirPath = path.join(await appDataDir(), "logs");

  if (!(await fs.exists(await appDataDir()))) {
    await fs.createDir(await appDataDir());
  }

  const logPath = path.join(appLogDirPath, `${logFileName}`);

  const timeInfo = `[${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}.${currentTime.getMilliseconds()}]`;

  if (!(await fs.exists(appLogDirPath))) {
    await fs.createDir(appLogDirPath);
  }

  await fs.writeFile(
    logPath,
    `${timeInfo} [${error ? "ERROR" : "LOG"}] - ${file} - ${message}\n`,
    { append: true },
  );
};
