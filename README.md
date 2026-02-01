# BitRush 黑客挖矿模拟器

一个假装黑客挖矿的网页，具有酷炫的黑客风格界面。

## 项目特点

- **黑客风格界面**：经典的黑色背景、绿色文字终端风格
- **实时挖矿模拟**：动态哈希率、区块发现、钱包余额累计
- **系统信息监控**：模拟CPU使用率、内存使用率、GPU温度等
- **交互式命令系统**：支持多种终端命令
- **响应式设计**：适配不同屏幕尺寸和横竖屏模式

## 项目文件

- `index.html` - 主页面结构
- `style.css` - 样式文件，实现黑客风格界面
- `script.js` - 脚本文件，实现挖矿模拟和交互功能

## 本地开发

1. **克隆项目**：
   ```bash
   git clone <repository-url>
   cd BitRush
   ```

2. **启动本地服务器**：
   ```bash
   # 使用Python内置服务器
   python3 -m http.server 8000
   
   # 或使用Node.js的http-server
   npx http-server -p 8000
   ```

3. **访问网站**：
   打开浏览器访问 `http://localhost:8000`

## 部署到 Cloudflare Pages

### 正确的部署方法

1. **创建 GitHub 仓库**：
   - 将项目文件上传到一个新的 GitHub 仓库
   - 确保仓库包含所有必要的文件（index.html、style.css、script.js）

2. **部署到 Cloudflare Pages**：
   - 登录 Cloudflare 账号
   - 导航到 Pages 部分
   - 点击 "Create a project"
   - 选择你的 GitHub 仓库
   - 配置构建设置：
     - **Framework preset**: `None`（静态网站）
     - **Build command**: 留空
     - **Build output directory**: 留空（默认为根目录）
   - 点击 "Deploy site"

3. **访问你的网站**：
   - 部署完成后，Cloudflare 会为你生成一个域名
   - 你可以通过该域名访问你的黑客挖矿模拟器

### 部署失败的原因

构建日志显示部署失败是因为尝试将静态网站作为 Cloudflare Worker 部署。Worker 是用于服务器端代码的，而我们的项目是纯静态网站，应该使用 Cloudflare Pages 的静态网站部署功能。

## 可用命令

在终端中输入以下命令：

- `help` - 显示帮助信息
- `start` - 开始挖矿
- `stop` - 停止挖矿
- `status` - 显示挖矿状态
- `clear` - 清除终端
- `exit` - 退出终端

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)

## 许可

MIT License