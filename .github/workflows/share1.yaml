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
                  
