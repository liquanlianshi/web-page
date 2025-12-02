import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <AnimatedPage>
      <section className="pt-40 pb-20 px-6 min-h-screen">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">联系我们</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              准备好开始您的下一个项目了吗？我们期待您的回音。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
               <div className="space-y-8">
                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                      <Mail />
                    </div>
                    <div>
                      <h3 className="text-xl text-white font-medium mb-2">发送邮件</h3>
                      <p className="text-gray-400">hello@aetheria.com</p>
                      <p className="text-gray-400">careers@aetheria.com</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                      <Phone />
                    </div>
                    <div>
                      <h3 className="text-xl text-white font-medium mb-2">拨打电话</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">周一至周五, 9am - 6pm EST</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin />
                    </div>
                    <div>
                      <h3 className="text-xl text-white font-medium mb-2">拜访我们</h3>
                      <p className="text-gray-400">123 Design Avenue, Suite 101</p>
                      <p className="text-gray-400">New York, NY 10012</p>
                    </div>
                 </div>
               </div>
            </motion.div>

            {/* Form */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
               className="bg-surface p-8 md:p-10 border border-white/5 rounded-sm"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400 uppercase tracking-wide">姓名</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400 uppercase tracking-wide">邮箱</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400 uppercase tracking-wide">主题</label>
                  <select 
                    id="subject"
                    className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors appearance-none"
                  >
                    <option>一般咨询</option>
                    <option>项目合作</option>
                    <option>加入我们</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400 uppercase tracking-wide">留言</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="请告诉我们要咨询的项目..."
                  />
                </div>

                <button 
                  type="button" 
                  className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-primary transition-colors duration-300"
                >
                  发送信息
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;