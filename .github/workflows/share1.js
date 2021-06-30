name: 中青分享阅读1

on:
    workflow_dispatch:
    schedule:
        - cron: "12 15 * * *"
    watch:
        types: [started]
    repository_dispatch:
        types: jd_bean_home

jobs:
    build:
        runs-on: ubuntu-latest
        if: github.event.repository.owner.id == github.event.sender.id
        steps:
            - uses: actions/checkout@v1
            - name: Use Node.js 10.x
              uses: actions/setup-node@v1
              with:
                  node-version: 10.x
            - name: npm install
              run: |
                  npm install
            - name: "运行 【中青分享】"
              run: |
                  node youthshare1.js
              env:
                  JD_COOKIE: ${{ github.event.client_payload.JD_COOKIE || secrets.JD_COOKIE }}
                  JD_DEBUG: ${{ github.event.client_payload.JD_DEBUG || secrets.JD_DEBUG }}
                  JD_USER_AGENT: ${{ github.event.client_payload.JD_USER_AGENT || secrets.JD_USER_AGENT }}
                  PUSH_KEY: ${{ github.event.client_payload.PUSH_KEY || secrets.PUSH_KEY }}
                  BARK_PUSH: ${{ github.event.client_payload.BARK_PUSH || secrets.BARK_PUSH }}
                  BARK_SOUND: ${{ github.event.client_payload.BARK_SOUND || secrets.BARK_SOUND }}
                  TG_BOT_TOKEN: ${{ github.event.client_payload.TG_BOT_TOKEN || secrets.TG_BOT_TOKEN }}
                  TG_USER_ID: ${{ github.event.client_payload.TG_USER_ID || secrets.TG_USER_ID }}
                  DD_BOT_TOKEN: ${{ github.event.client_payload.DD_BOT_TOKEN || secrets.DD_BOT_TOKEN }}
                  DD_BOT_SECRET: ${{ github.event.client_payload.DD_BOT_SECRET || secrets.DD_BOT_SECRET }}
                  IGOT_PUSH_KEY: ${{ github.event.client_payload.IGOT_PUSH_KEY || secrets.IGOT_PUSH_KEY }}
                  QQ_SKEY: ${{ github.event.client_payload.QQ_SKEY || secrets.QQ_SKEY }}
                  QQ_MODE: ${{ github.event.client_payload.QQ_MODE || secrets.QQ_MODE }}
                  QYWX_KEY: ${{ github.event.client_payload.QYWX_KEY || secrets.QYWX_KEY }}
                  QYWX_AM: ${{ github.event.client_payload.QYWX_AM || secrets.QYWX_AM }}
                  PUSH_PLUS_TOKEN: ${{ github.event.client_payload.PUSH_PLUS_TOKEN || secrets.PUSH_PLUS_TOKEN }}
                  PUSH_PLUS_USER: ${{ github.event.client_payload.PUSH_PLUS_USER || secrets.PUSH_PLUS_USER }}
                  SYNCURL: https://github.com/lxk0301/jd_scripts/raw/master/jd_bean_home.js
