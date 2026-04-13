---
name: git-commit-summary
description: 分析 git diff 后按「新增功能 / 改进优化 / 问题修复」三个维度分条列举，自动生成带 scope 的 Conventional Commit，使用多个 -m 确保换行并追加 Co-authored-by trailer；先将要提交内容以 Markdown 写入根目录 change-log/vN.md（自增 N，文件头写日期），再暂存该 md 并执行提交，使 changelog 随本次提交入库。适用于用户提到"提交改动""提交本次改动""commit 本次修改"等场景。
---

# Git Commit Summary

## 适用场景

用户说以下任一表达时使用：

- "提交改动" / "提交本次改动" / "commit 本次修改"
- "总结改动并提交" / "按规范提交当前改动"

---

## 执行流程（必须按顺序）

### 1. 了解改动全貌

```bash
git status --short
git diff --stat
git diff          # 阅读具体内容，理解每处改动的意图
```

### 2. 精确暂存（不含 change-log）

只暂存本次要提交的**代码/配置等**文件，排除用户明确说不提交的目录；**不要**在此步暂存 `change-log/`（changelog 文件在步骤 5 生成后，于步骤 6 再一并 add 并提交）。

```bash
git add <相关路径...>
git status --short   # 确认暂存结果
```

### 3. 分模块总结并按维度归类

- 将改动按**顶层职责模块**分组，每组下用 `- ` 分条列举，描述「做了什么」，不解释「为什么」。
- 模块标题依实际项目结构决定（例如：数据层、后端、前端、shared-types、MCP、Agent 等），无需套固定框架。
- **模块合并与命名（项目约定）**：
  - **同域合并**：若某一维度下的改动都属于同一顶层域（如均为 `apps/web`），使用**一个**模块标题 **`前端`**，其下用多条 `-` 分条写清侧边栏、Header、types、UI 等，**禁止**拆成「前端 · 侧边栏」「前端 · UI」「前端 · types」等多个三级标题，也**禁止**在每条前重复加「前端」类前缀。
  - **后端**、**shared-types**、**MCP** 等同理：同域一个 `###`、下面分条即可。
  - **仅当跨顶层域**（例如同时改服务端与 Web）时，在同一维度内拆多个 `###`（如 `### 后端` 与 `### 前端`），各自下列条目。
  - `git commit` 的「模块名」`-m` 段落使用 **`前端`/`后端`** 等简短名，与 `change-log` 中 `###` 一致。
- **每个模块下的每条改动必须归入以下三个维度之一**（同一模块可出现在多个维度下）：

| 维度         | 适用情况                                                           |
| ------------ | ------------------------------------------------------------------ |
| **新增功能** | 新增接口/能力、新页面、新组件、新配置项、新依赖等                  |
| **改进优化** | 重构、样式/交互优化、性能优化、文案/提示优化、依赖升级、配置调整等 |
| **问题修复** | 修 bug、兜底/容错、解析失败处理、布局错乱修复等                    |

- 若某维度下没有任何条目，**该维度不出现在 commit body 中**。

### 4. 生成 Conventional Commit 标题

格式：`<type>(<scope>): <中文简述>`

**type 选取：**

| type       | 适用情况                       |
| ---------- | ------------------------------ |
| `feat`     | 新增功能                       |
| `fix`      | 修复 bug                       |
| `refactor` | 重构（不新增功能、不修复 bug） |
| `docs`     | 仅文档/注释改动                |
| `chore`    | 构建、工具、配置、规范文件改动 |
| `test`     | 测试相关                       |

**scope 推断（必须有值）：**

- 仅改动一个顶层模块 → 该模块名（如 `web`、`server`、`mcp`）
- 跨多个模块 → 主要模块列表，逗号分隔（如 `mcp,agent-v2,web`）
- 仅规范/配置文件 → `rules` 或 `chore`

### 5. 写入 Changelog（根目录 change-log）

在执行 `git commit` **之前**，将当次提交内容以 Markdown 形式写入项目根目录下的 `change-log/` 目录，以便把生成的 md 文件一并纳入本次提交。

**目录与命名：**

- 路径：`<项目根>/change-log/`。若该目录不存在，先创建。
- 文件名：自增编号，如 `v1.md`、`v2.md`、`v3.md`。
  - 确定下一编号：列出 `change-log/` 下已存在的 `v*.md`，解析数字（如 `v2.md` → 2），取最大值加一；若没有任何 `v*.md` 则从 `v1.md` 开始。

**文件内容格式（Markdown）：**

1. **第一行**：**当日日期**，格式 `YYYY-MM-DD`（例如 `2026-03-11`）。可选用 `YYYY-MM-DD HH:mm` 若需记录具体时间。  
   **日期来源**：使用用户说「提交改动」时的**当前自然日**。若对话/上下文中用户明确给出了「今天」的日期则用该日期；否则用系统提供的当前日期（如 user_info 中的 `Today's date`）。**禁止**把其他 changelog 文件里的日期或对话里出现的任意历史日期当作「当日」写入本文件。
2. **空行**后写提交标题：`<type>(<scope>): <中文简述>`（与即将执行的 commit 标题一致）。
3. **空行**后按「新增功能 → 改进优化 → 问题修复」三个维度书写，仅包含有内容的维度；每个维度下用二级标题 `## 新增功能` / `## 改进优化` / `## 问题修复`，其下按模块用三级标题 `### <模块名>`，再列条目（与 commit body 一致）。

**示例（写入 `change-log/v3.md`）：**

```markdown
2026-03-11

fix(web): 历史抽屉改为右侧滑出并修复 Vaul 布局冲突

## 改进优化

### 聊天

- 历史会话 Drawer 从 bottom 改为 right，高度 h-full

## 问题修复

### 聊天

- shouldScaleBackground=false 避免 Vaul 关闭动画与 React 重渲染导致布局错乱
```

**执行方式：** 使用文件读写工具（如 `list_dir` 或 `glob_file_search` 获取 change-log 下现有 `v*.md` 以计算下一编号，再 `write` 新文件）。写完后再执行步骤 6 的暂存与提交。

### 6. 暂存 Changelog 并执行提交

- 将步骤 5 生成的 `change-log/vN.md` **与**步骤 2 中已暂存的其他文件一并纳入本次提交（若步骤 2 未暂存 change-log，此处需执行 `git add change-log/vN.md`）。
- 确认 `git status --short` 中包含 `change-log/vN.md` 及本次要提交的其余文件后，执行提交。

**必须使用多个 `-m` 参数**（不用 HEREDOC），每个 `-m` 对应一段 body，Git 自动在段落间插入空行。

**Body 结构：按「新增功能 → 改进优化 → 问题修复」三个维度依次输出；每个维度下先写维度标题，再按模块分条。**

- 仅包含有内容的维度；某维度无条目则跳过该维度。
- 每个维度内：维度标题单独一个 `-m`，随后该维度下每个模块占两个 `-m`（模块名 + 该模块在本维度下的条目列表）。

```bash
git add change-log/vN.md   # 与步骤 2 中其他已暂存文件一起纳入
git commit \
  --trailer "Co-authored-by: <IDE标识>" \
  -m "<type>(<scope>): <中文简述>" \
  -m "新增功能" \
  -m "<模块名>" \
  -m "- <改动点1>
- <改动点2>" \
  -m "改进优化" \
  -m "<模块名>" \
  -m "- <改动点A>" \
  -m "问题修复" \
  -m "<模块名>" \
  -m "- <改动点X>"
```

> 流程小结：先根据步骤 1～4 整理出 commit 标题与 body → **步骤 5 写入 change-log/vN.md** → **步骤 6 暂存该 md 并执行 git commit**，使当次生成的 changelog 文件随本次提交一并入库。

---

## IDE 环境检测与 Co-authored-by

提交前按以下优先级检测当前 AI 编辑器环境：

| 检测依据                                       | IDE            | trailer 值                                             |
| ---------------------------------------------- | -------------- | ------------------------------------------------------ |
| Skill 路径含 `.cursor/` 或 `.cursor/` 目录存在 | Cursor         | `Co-authored-by: Cursor <cursoragent@cursor.com>`      |
| 环境变量 `$WINDSURF_*` 存在                    | Windsurf       | `Co-authored-by: Windsurf <windsurf@codeium.com>`      |
| 环境变量 `$GITHUB_COPILOT_*` 存在              | GitHub Copilot | `Co-authored-by: GitHub Copilot <copilot@github.com>`  |
| 环境变量 `$CLAUDE_*` 存在                      | Claude Code    | `Co-authored-by: Claude <claude@anthropic.com>`        |
| 无法识别                                       | —              | 不追加 trailer，body 末注明 `AI-assisted: unknown IDE` |

仓库内 `.cursor/skills/` 与 `.codebuddy/skills/` 下的 `git-commit-summary` 为同源 skill，内容应保持同步；按上表检测 IDE 并选择 Co-authored-by。

---

## 完整示例

**场景：** 新增 catalog 工具与前端事件，并修复目录树刷新时机。

```bash
git commit \
  --trailer "Co-authored-by: Cursor <cursoragent@cursor.com>" \
  -m "feat(mcp,agent-v2,web): 新增 catalog 创建删除工具与目录树变更事件" \
  -m "新增功能" \
  -m "MCP" \
  -m "- 新增 CatalogToolGroup：catalog_create、catalog_delete；mcp.module/registry 注册
- ToolName 增加 CATALOG_CREATE/DELETE" \
  -m "Agent-v2" \
  -m "- DOC profile：toolNames 增加 catalog_create/delete，maxSteps 8
- agui：新增 CUSTOM_CATALOG_CREATED/DELETED 事件类型与 factory" \
  -m "前端" \
  -m "- AguiEventType、applyEvent 支持 CUSTOM_CATALOG_CREATED/DELETED
- document-event：创建/删除/移动/重命名统一触发 fetchCatalogTree"
```

**场景：** 同一维度内用 **`后端` / `前端`** 各一个模块名，其下**多条 `-` 合并同域改动**（不要「前端 · xxx」拆模块）：

```bash
git commit \
  --trailer "Co-authored-by: Cursor <cursoragent@cursor.com>" \
  -m "feat(server,web): 超级管理员与权限校验增强" \
  -m "新增功能" \
  -m "后端" \
  -m "- 新增 permission.config.ts，SUPER_ADMINS 配置超管 RTX 列表
- PermissionService 新增 isSuperAdmin / isWorkspaceAdmin；超管自动获得全工作区 owner 与全文档 can_grant
- WorkspaceGuard 超管直接放行并构造虚拟 owner；.env 示例补充 SUPER_ADMINS" \
  -m "前端" \
  -m "- 工作区 layout 增加 checkAccess API fallback，覆盖超管/公开空间等本地列表无法覆盖的场景" \
  -m "改进优化" \
  -m "后端" \
  -m "- PermissionService.getMyDocumentPermission 工作区管理员快捷返回 can_grant，减少 documentPermission 查询"
```

**场景：** 仅改进与修复（无新增功能），则 body 不包含「新增功能」段落：

```bash
git commit \
  --trailer "Co-authored-by: Cursor <cursoragent@cursor.com>" \
  -m "fix(web): 历史抽屉改为右侧滑出并修复 Vaul 布局冲突" \
  -m "改进优化" \
  -m "聊天" \
  -m "- 历史会话 Drawer 从 bottom 改为 right，高度 h-full" \
  -m "问题修复" \
  -m "聊天" \
  -m "- shouldScaleBackground=false 避免 Vaul 关闭动画与 React 重渲染导致布局错乱"
```

---

## 强约束

- 不执行 `git push`，只本地提交
- 提交信息必须为中文（Conventional Commit 标题除外）
- 使用多个 `-m` 而非 HEREDOC，确保换行稳定
- 每次提交必须按上方规则追加正确的 `--trailer "Co-authored-by: ..."`
- 每次提交必须包含当次生成的 `change-log/vN.md`，因此**先执行步骤 5 写入 md，再执行步骤 6 暂存该文件并 commit**，不得先 commit 再写 changelog
