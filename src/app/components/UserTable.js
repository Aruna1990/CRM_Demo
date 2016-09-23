import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
// import FakeObjectDataListStore from '../store/FakeObjectDataListStore';
import '../styles/usertable.css';
import {Table} from 'reactabular';
const columns = [
  {
    property: 'id',
    header: {
      label: '用户'
    },
    cell: {
      format: (id, extra) => {
        console.log(id, extra);
        return (
          <div className="user-info-cell">
            <div className="avatar"><img src={extra.rowData.headerimg}/></div>
            <div>
              <div className="name"><Link to={`/user/details/${id}`}>{extra.rowData.usermember.toLocaleString()}</Link></div>
              <div className="remarks">{extra.rowData.remarks.toLocaleString()}</div>
            </div>
          </div>
        );
      }
    },
    props: {
      style: {
        width: 300,
        maxWidth: 300,
        minWidth: 300
      }
    }
  },
  {
    property: 'status',
    header: {
      label: '状态'
    },
    cell: {
      format: (active, extra) => (
        <span className={active ? '' : 'font-gray'}>{active ? '有效' : '冻结'}</span>
      )
    },
    props: {
      style: {
        width: 50,
        maxWidth: 50,
        minWidth: 50
      }
    }
  },
  {
    property: 'score',
    header: {
      label: '积分'
    },
    props: {
      style: {
        width: 100,
        maxWidth: 100,
        minWidth: 100
      }
    }
  },
  {
    property: 'getcarddate',
    header: {
      label: '注册时间'
    },
    props: {
      style: {
        width: 300,
        maxWidth: 300,
        minWidth: 300
      }
    }
  },
  {
    property: 'opration',
    header: {
      label: '操作'
    },
    props: {
      style: {
        width: 50,
        maxWidth: 50,
        minWidth: 50
      }
    }
  }
];

class UserTable extends Component {
  constructor(props) {
    super(props);
    // const dataList = new FakeObjectDataListStore(100);
    this.onBodyScroll = this.onBodyScroll.bind(this);
    this.page = 1;
  }
  onBodyScroll({target: {scrollHeight, scrollTop, offsetHeight}}) {
    if (scrollTop + offsetHeight === scrollHeight) {
      this.props.onNextPage(3);
    }
  }
  render() {
    console.log("render table");
    console.log("render table");
    const {list} = this.props;
    return (
      <Table.Provider
        className="pure-table pure-table-striped"
        columns={columns}>
        <Table.Header 
          className="header"
          style={{
            display: 'block',
            overflow: 'auto',
            maxWidth: 830,
            minWidth: 830
          }}
        />

        <Table.Body
          rows={list}
          rowKey="id"
          onRow={(row, {rowIndex}) => ({
            className: rowIndex % 2 ? 'odd-row' : 'even-row'
          })}
          style={{
            display: 'block',
            overflow: 'auto',
            maxHeight: 400,
            maxWidth: 830,
            minWidth: 830
          }}
          onScroll={this.onBodyScroll}
        />
      </Table.Provider>
    );
  }
}
UserTable.propTypes = {
  list: PropTypes.array.isRequired
};
export default UserTable;
