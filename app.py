# coding:utf-8
from __future__ import unicode_literals
from flask import Flask,render_template


app = Flask(__name__)
@app.route('/')
def home():
    '''
    主页
    '''
    # 渲染首页HTML模板文件
    return render_template('index.html')

if __name__ == '__main__':
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
    app.debug = True
    app.run(host="0.0.0.0")
