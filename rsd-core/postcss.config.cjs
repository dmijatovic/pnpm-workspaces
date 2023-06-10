// SPDX-FileCopyrightText: 2021 Dusan Mijatovic (dv4all)
// SPDX-FileCopyrightText: 2021 dv4all
//
// SPDX-License-Identifier: Apache-2.0

const config = require('./tailwind.config.cjs')

module.exports = {
  plugins: {
    tailwindcss: {config},
    autoprefixer: {},
  },
}