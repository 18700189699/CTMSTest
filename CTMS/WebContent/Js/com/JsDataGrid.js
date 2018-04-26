/* 通过ajax取得数据，填充一个Table元素。
*
* @param pageSize : 每页记录数 
* @param gridId : Table元素的ID
*/
function JsDataGrid(pageSize, gridId) {
    var _pageIndex = 1; // 页码
    this._pageSize = pageSize; // 每页记录数
    this._gridName = gridId; // Table元素ID

    // 建立成员方法
    if (typeof JsDataGrid._initialized == 'undefined') {
        // 构造传入参数代理方法
        JsDataGrid.prototype.getParam = function() { }
        // 用数据填充Table方法
        JsDataGrid.prototype.fillRowFunc = function() { }
        // 检索并显示第一页
        JsDataGrid.prototype.navigateFirstPage = function(url) {
            _pageIndex = 1;
            var data = this.getParam();
            this.sendRequest(url, data);
        }

        // 检索并显示某一页
        JsDataGrid.prototype.navigatePage = function(url, incre) {
            _pageIndex = _pageIndex + incre;
            var data = this.getParam();
            this.sendRequest(url, data);
        }

        // 发送请求
        JsDataGrid.prototype.sendRequest = function(url, adata) {
            eval("searchOpt = { PageIndex: _pageIndex, PageSize: this._pageSize," + adata + "};");

            $.ajax({
                data: searchOpt,
                dataType: "json",
                type: "POST",
                url: url,
                success: fillData2(this),
                error: function(msg) { document.write(msg.responseText); }
            });
        }

        // 为了向fillData传递参数建立的方法
        function fillData2(obj) {
            return function(msg) {
                fillData(msg, obj);
            }
        }

        /// 填充表格中的数据
        function fillData(contents, obj) {
            var pageCount = 0;
            var rowCount = 0;
            var serializer = Sys.Serialization.JavaScriptSerializer;

            if (contents.Object.length <= 0) 
            {
                return;
            }
            // 清除数据
            // 删除模板行以外的其他行
            $(obj._gridName + " tbody:eq(1) tr:not(:first)").remove();

            // 取得总记录数，用来计算记录页数
            var rowCountObj = serializer.deserialize(contents.msg);
            rowCount = rowCountObj.rowCount;
            pageCount = Math.ceil(rowCount / obj._pageSize);

            // 设置分页按钮灰显
            $(obj._gridName + " tr td>input[name='pagerPrevious']").attr("disabled", _pageIndex <= 1);
            $(obj._gridName + " tr td>input[name='pagerNext']").attr("disabled", _pageIndex >= pageCount);
            // 无记录则返回
            if (pageCount == 0) {
                return;
            }
            // 当前页记录数，如果是最后一页并且未被整除，页数为余数
            var remainder = rowCount % obj._pageSize;
            var currentPageRowCount = _pageIndex >= pageCount && remainder != 0 ? remainder : obj._pageSize;

            // 取得模板行:目标grid的第二个tbody
            var tbody = $(obj._gridName + " tbody:eq(1)").get(0);
            // 填充数据
            for (i = 0; i < contents.Object.length; i++) {
                // 按照模板新建新行
                var newRow = tbody.rows[0].cloneNode(true);
                // 设定为显示(模板行为不显示)
                newRow.style.display = "";
                // 设定新行内容
                newRow.id = "row" + i;
                obj.fillRowFunc(newRow, contents.Object[i]);
                // 追加到末尾
                tbody.appendChild(newRow);
            }
        }
        JsDataGrid._initialized = true;
    }
}