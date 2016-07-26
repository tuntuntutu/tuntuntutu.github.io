/**
 * ToDoTips 剩余与总计计数展示视图
 */
var ToDoTips = React.createClass({
    render: function () {
        var items = this.props.items,
            remains = 0;
        items.map(function (item) {
            if (!item.done) {
                ++remains;
            }
        });
        return <span>{remains}/{items.length}</span>;
    }
});
/**
 * TodoList
 *      计划列表展示视图
 *      包含了两个行为状态,切换计划状态，以及清理已完成计划数
 */
var TodoList = React.createClass({
    getInitialState: function () {
        return {items: this.props.items};
    },
    shouldComponentUpdate: function (nextProps) {
        this.state.items.push(nextProps.nextItem);
        return true;
    },
    archived: function () {
        var items = this.state.items.concat([]),
            remainItems = [];
        items.forEach(function (item) {
            if (!item.done) {
                remainItems.push(item);
            }
        });
        this.setState({items: remainItems});
    },
    toggle: function (e) {
        var index = e.target.getAttribute('data-index'),
            items = this.state.items.concat([]);
        items[index].done = !items[index].done;
        this.setState({items: items});
    },
    render: function () {
        var that = this;
        var createItem = function (item, index) {
            var itemClass = item.done ? 'done-true' : '';
            return <li className={itemClass}><input type='checkbox' data-index={index} onClick={that.toggle}
                                                    checked={item.done}/>{item.todo}</li>;
        };
        return (
            <div>
                <span>remaining <ToDoTips items={this.state.items}/> [archive]</span>
                <ul>{ this.state.items.map(createItem)}</ul>
            </div>
        );
    }
});
/**
 *  TodoApp 面板入口
 *  新增计划行为以及状态。
 */
var TodoApp = React.createClass(
    {
        getInitialState: function () {
            return {items: this.props.sourceData};
        },
        handleSubmit: function (e) {
            e.preventDefault();
            var texts = e.target['text'].value;
            this.setState({
                nextItem: {
                    todo: texts,
                    done: false
                }
            });
            e.target['text'].value = '';
        },
        render: function () {
            return (
                <div>
                    <h3>TODO</h3>
                    <TodoList items={this.state.items} nextItem={this.state.nextItem}/>

                    <form onSubmit={this.handleSubmit}>
                        <input
                            placeholder='foo foo'
                            name='text'/>
                        <button>{'Add #' + (this.state.items.length + 1)}</button>
                    </form>
                </div>
            );
        }
    });
/**
 * [sourceData 初始数据]
 * @type {Array}
 */
var sourceData = [
    {todo: 'learn React', done: true},
    {todo: 'build an React app', done: false}];
React.render(
    <TodoApp sourceData={sourceData}/>,
    document.getElementById('example')
);