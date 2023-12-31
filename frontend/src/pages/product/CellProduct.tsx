import React from 'react'
import { Form, Input, InputNumber, Select } from 'antd'
import { Product } from '../../types/Product'

interface CellProductProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean
  dataIndex: keyof Product
  title: any
  inputType: 'number' | 'text' | 'select'
  record: Product
  index: number
  children: React.ReactNode
  //   penyuplay: any[]
}

const CellProduct: React.FC<CellProductProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  //   penyuplay,
  ...restProps
}) => {
  let inputNode: React.ReactNode

  if (inputType === 'select') {
    inputNode = (
      <Form.Item
        name={dataIndex}
        initialValue={record[dataIndex]}
        rules={[
          {
            required: true,
            message: `Please Input ${title}!`,
          },
        ]}
      >
        <Select
          showSearch
          optionFilterProp="children"
          filterOption={(input, option) =>
            option?.children
              ? option.children
                  .toString()
                  .toLowerCase()
                  .includes(input.toLowerCase())
              : false
          }
        >
          {/* {penyuplay.map((ngarang) => (
            <Select.Option key={ngarang._id} value={ngarang._id}>
              {ngarang.nama_supplier}
            </Select.Option>
          ))} */}
        </Select>
      </Form.Item>
    )
  } else if (inputType === 'number') {
    inputNode = <InputNumber />
  } else {
    inputNode = <Input />
  }

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

export default CellProduct
