---
layout: page
title: 量化交易演示
sidebar: false
aside: false
---

<div class="qt-demo">
  <div class="qt-bar">
    <span>goudan 合约点卡交易平台 · 在线演示（账户数据保存在本机浏览器，无需后端）</span>
    <a href="/docs/quantitative-trading/index.html" target="_blank" rel="noreferrer">在新窗口打开 ↗</a>
  </div>
  <iframe
    src="/docs/quantitative-trading/index.html"
    title="goudan 合约点卡交易平台"
  ></iframe>
</div>

<style>
.qt-demo {
  max-width: 1600px;
  margin: 0 auto;
  padding: 16px 24px 24px;
}
.qt-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 16px;
  margin-bottom: 12px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
.qt-bar a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  white-space: nowrap;
}
.qt-demo iframe {
  display: block;
  width: 100%;
  height: calc(100vh - 140px);
  min-height: 560px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: #181a20;
}
@media (max-width: 768px) {
  .qt-demo { padding: 8px 12px 16px; }
  .qt-demo iframe { height: calc(100vh - 160px); min-height: 480px; }
}
</style>
