import React, { useState } from 'react'
import { Form, Input, Button, Card, Typography } from 'antd'

const { Title } = Typography

function App() {
  const [formData, setFormData] = useState({ name: '', description: '' })

  const [submittedData, setSubmittedData] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    setSubmittedData(formData)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1c1c27', padding: '40px 20px' }}>
      <Card
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        <Title level={2} style={{ textAlign: 'center' }}>
          Форма с использованием Ant Design
        </Title>
  
        <Form layout="vertical">
          <Form.Item label="Имя">
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Введите ваше имя"
            />
          </Form.Item>
  
          <Form.Item label="Описание">
            <Input
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Введите описание"
            />
          </Form.Item>
  
          <Form.Item>
            <Button type="primary" onClick={handleSubmit} block>
              Отправить
            </Button>
          </Form.Item>
        </Form>
  
        {submittedData && (
          <Card
            type="inner"
            title="Отправленные данные:"
            style={{ marginTop: "20px", borderRadius: '8px' }}
          >
            <p><strong>Имя:</strong> {submittedData.name}</p>
            <p><strong>Описание:</strong> {submittedData.description}</p>
          </Card>
        )}
      </Card>
    </div>
  );
  
}

export default App
