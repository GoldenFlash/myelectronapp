import React from "react";
import { Input, Form, Button, Col, Row } from 'antd'
import ReactPlayer from 'react-player'

const FromItem = Form.Item
const Player = (props) => {
	let [videoUrl, setVideoUrl] = React.useState('')
	// https://v4.dious.cc/20220514/WGIs36la/1200kb/hls/index.m3u8
	const [form] = Form.useForm();

	const getVideo = () => {
		form.validateFields().then((values) => {
			console.log("values", values)
			setVideoUrl(values.url)
		})
	}
	return (
		<div style={{ padding: "16px", width: "100vw" }}>
			<Form form={form} layout="inline">
				<Col span={16}>
					<FromItem label="链接" name='url'>
						<Input style={{ width: '100%' }} />
					</FromItem>
				</Col>
				<Button onClick={getVideo}>获取视频</Button>
			</Form>
			<div style={{ marginTop: 16 }}>
				{
					videoUrl &&
					<ReactPlayer
						className='react-player'
						controls
						url={videoUrl}
						width="90%"
						height='100%'
					/>
				}

			</div>
			{/* <video width={500} height={500} controls src={videoUrl}  /> */}
		</div>
	)
}

export default Player