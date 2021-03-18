'use strict';
const path = require('path');
const FilemanagerWebpackPlugin = require('filemanager-webpack-plugin');
const fse = require('fs-extra');
const resolve = function(dir) {
    return path.join(__dirname, dir);
};
module.exports = {
    base: process.env.VUEPRESS_BASE || '/docs/',
    title: 'Martech',
    head: [['link', { ref: 'icon', href: '/logo.png' }]],
    plugins: ['vuepress-plugin-mermaidjs'],
    dest: resolve('../../dist'),
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: '最后更新于',
        nav: [
            {
                text: 'Github',
                link: 'https://github.com/tencentad/martech',
            },
        ],
        sidebar: [
            {
                title: 'RTA服务',
                path: '/RTA/',
                collapsable: true,
                sidebarDepth: 1,
            },
            {
                title: '权限管理',
                path: '/Authority/',
                collapsable: true,
                sidebarDepth: 1,
            },
            {
                title: '跨平台账号',
                path: '/Advertiser/',
                collapsable: true,
                sidebarDepth: 1,
            },
            {
                title: '资产管理',
                path: '/Property/',
                collapsable: true,
                sidebarDepth: 1,
            },
            {
                title: '数据报表',
                path: '/AdReport/',
                collapsable: true,
                sidebarDepth: 1,
            },
            {
                title: '联邦学习',
                path: '/FederatedLearning/',
                collapsable: true,
                sidebarDepth: 1,
            },
            {
                title: '归因服务',
                path: '/Attribution/',
                collapsable: true,
                sidebarDepth: 1,
            },
        ],
    },
    configureWebpack: (config, isServer) => {
        if (!isServer) {
            return {
                plugins: [
                    new FilemanagerWebpackPlugin({
                        events: {
                            onStart: {
                                delete: [
                                    {
                                        source: resolve('../../../cmd/web/docs'),
                                        options: {
                                            force: true,
                                        },
                                    },
                                ],
                            },
                        },
                    }),
                ],
            };
        }
    },
    async generated(pagePaths) {
        fse.copy(resolve('../../dist'), resolve('../../../cmd/web/docs'))
            .then(() => {
                console.log('Copy dist to cmd/web/docs success');
            })
            .catch((err) => {
                console.error(err);
            });
    },
};
