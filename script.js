// 挖矿模拟数据
let miningData = {
    hashRate: 0,
    blocksFound: 0,
    walletBalance: 0.00,
    progress: 0,
    cpuUsage: 0,
    memoryUsage: 0,
    gpuTemp: 0,
    networkLatency: 0,
    todayEarnings: 0.00,
    totalEarnings: 0.00,
    miningTime: 0,
    networkDifficulty: 0,
    isMining: true
};

// DOM元素
const elements = {
    hashRate: document.getElementById('hashRate'),
    blocksFound: document.getElementById('blocksFound'),
    walletBalance: document.getElementById('walletBalance'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    cpuUsage: document.getElementById('cpuUsage'),
    memoryUsage: document.getElementById('memoryUsage'),
    gpuTemp: document.getElementById('gpuTemp'),
    networkLatency: document.getElementById('networkLatency'),
    todayEarnings: document.getElementById('todayEarnings'),
    totalEarnings: document.getElementById('totalEarnings'),
    miningTime: document.getElementById('miningTime'),
    networkDifficulty: document.getElementById('networkDifficulty'),
    commandInput: document.getElementById('commandInput'),
    terminalOutput: document.querySelector('.terminal-output')
};

// 初始化
function init() {
    // 启动挖矿模拟
    startMiningSimulation();
    
    // 启动系统信息模拟
    startSystemInfoSimulation();
    
    // 启动挖矿统计模拟
    startMiningStatsSimulation();
    
    // 绑定命令输入事件
    bindCommandInput();
    
    // 初始日志
    addLog('$ 挖矿终端已启动！');
    addLog('$ 输入 help 查看可用命令');
}

// 开始挖矿模拟
function startMiningSimulation() {
    setInterval(() => {
        if (miningData.isMining) {
            // 增加哈希率（随机波动）
            miningData.hashRate = Math.floor(Math.random() * 10000) + 5000;
            
            // 增加进度
            miningData.progress += Math.random() * 5;
            
            // 检查是否找到区块
            if (miningData.progress >= 100) {
                miningData.blocksFound++;
                const reward = 6.25; // 比特币区块奖励
                miningData.walletBalance += reward;
                miningData.todayEarnings += reward;
                miningData.totalEarnings += reward;
                miningData.progress = 0;
                
                // 添加找到区块的日志
                addLog(`✓ 找到区块！获得 ${reward} BTC 奖励`, 'success');
            }
            
            // 更新UI
            updateMiningUI();
        }
    }, 1000);
}

// 开始系统信息模拟
function startSystemInfoSimulation() {
    setInterval(() => {
        // 模拟CPU使用率（70-95%）
        miningData.cpuUsage = Math.floor(Math.random() * 25) + 70;
        
        // 模拟内存使用率（60-85%）
        miningData.memoryUsage = Math.floor(Math.random() * 25) + 60;
        
        // 模拟GPU温度（60-85°C）
        miningData.gpuTemp = Math.floor(Math.random() * 25) + 60;
        
        // 模拟网络延迟（10-50ms）
        miningData.networkLatency = Math.floor(Math.random() * 40) + 10;
        
        // 更新UI
        updateSystemInfoUI();
    }, 2000);
}

// 开始挖矿统计模拟
function startMiningStatsSimulation() {
    setInterval(() => {
        // 增加挖矿时间
        miningData.miningTime++;
        
        // 模拟网络难度（随机波动）
        miningData.networkDifficulty = Math.floor(Math.random() * 1000000) + 1000000;
        
        // 更新UI
        updateMiningStatsUI();
    }, 60000); // 每分钟更新一次
}

// 更新挖矿UI
function updateMiningUI() {
    elements.hashRate.textContent = miningData.hashRate.toLocaleString();
    elements.blocksFound.textContent = miningData.blocksFound;
    elements.walletBalance.textContent = miningData.walletBalance.toFixed(2);
    elements.progressFill.style.width = `${miningData.progress}%`;
    elements.progressText.textContent = `${Math.floor(miningData.progress)}%`;
}

// 更新系统信息UI
function updateSystemInfoUI() {
    elements.cpuUsage.textContent = `${miningData.cpuUsage}%`;
    elements.memoryUsage.textContent = `${miningData.memoryUsage}%`;
    elements.gpuTemp.textContent = `${miningData.gpuTemp}°C`;
    elements.networkLatency.textContent = `${miningData.networkLatency}ms`;
}

// 更新挖矿统计UI
function updateMiningStatsUI() {
    elements.todayEarnings.textContent = miningData.todayEarnings.toFixed(2);
    elements.totalEarnings.textContent = miningData.totalEarnings.toFixed(2);
    
    // 格式化挖矿时间
    const hours = Math.floor(miningData.miningTime / 60);
    const minutes = miningData.miningTime % 60;
    elements.miningTime.textContent = `${hours}h ${minutes}m`;
    
    elements.networkDifficulty.textContent = miningData.networkDifficulty.toLocaleString();
}

// 绑定命令输入事件
function bindCommandInput() {
    elements.commandInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = elements.commandInput.value.trim();
            elements.commandInput.value = '';
            
            if (command) {
                processCommand(command);
            }
        }
    });
}

// 处理命令
function processCommand(command) {
    addLog(`$ ${command}`);
    
    switch (command.toLowerCase()) {
        case 'help':
            addLog('可用命令:');
            addLog('  help - 显示帮助信息');
            addLog('  start - 开始挖矿');
            addLog('  stop - 停止挖矿');
            addLog('  status - 显示挖矿状态');
            addLog('  clear - 清除终端');
            addLog('  exit - 退出终端');
            break;
            
        case 'start':
            if (!miningData.isMining) {
                miningData.isMining = true;
                addLog('✓ 挖矿已开始', 'success');
            } else {
                addLog('⚠ 挖矿已经在运行中', 'error');
            }
            break;
            
        case 'stop':
            if (miningData.isMining) {
                miningData.isMining = false;
                addLog('⚠ 挖矿已停止', 'error');
            } else {
                addLog('⚠ 挖矿已经停止', 'error');
            }
            break;
            
        case 'status':
            addLog('挖矿状态:');
            addLog(`  哈希率: ${miningData.hashRate} H/s`);
            addLog(`  已找到区块: ${miningData.blocksFound}`);
            addLog(`  钱包余额: ${miningData.walletBalance.toFixed(2)} BTC`);
            addLog(`  挖矿状态: ${miningData.isMining ? '运行中' : '已停止'}`);
            break;
            
        case 'clear':
            // 清空终端输出（保留初始日志）
            const logs = elements.terminalOutput.querySelectorAll('.log');
            logs.forEach((log, index) => {
                if (index > 5) { // 保留前6条初始日志
                    log.remove();
                }
            });
            break;
            
        case 'exit':
            addLog('正在关闭挖矿终端...');
            addLog('感谢使用 BitRush 挖矿终端！');
            setTimeout(() => {
                // 模拟退出效果
                elements.terminalOutput.innerHTML = '';
                addLog('终端已关闭');
            }, 1000);
            break;
            
        default:
            addLog(`未知命令: ${command}`, 'error');
            addLog('输入 help 查看可用命令');
            break;
    }
}

// 添加日志
function addLog(text, type = 'normal') {
    const logElement = document.createElement('p');
    logElement.className = `log ${type}`;
    logElement.textContent = text;
    
    // 找到终端输入前的位置插入
    const terminalInput = document.querySelector('.terminal-input');
    elements.terminalOutput.insertBefore(logElement, terminalInput);
    
    // 滚动到底部
    elements.terminalOutput.scrollTop = elements.terminalOutput.scrollHeight;
}

// 初始化
init();

// 添加一些初始动画效果
window.addEventListener('load', () => {
    // 初始哈希率动画
    let initialHashRate = 0;
    const hashRateInterval = setInterval(() => {
        initialHashRate += 1000;
        elements.hashRate.textContent = initialHashRate;
        if (initialHashRate >= 5000) {
            clearInterval(hashRateInterval);
        }
    }, 100);
});