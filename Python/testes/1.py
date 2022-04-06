from tkinter import *
import tkinter.font as tkFont

root = Tk() # Tkinter root
root.title("Wi a tirar tiro") #Tkinter title
try:
    root.iconbitmap("icon.ico") # Icon
except:
    pass

class App():
    def __init__(self, root):
        self.root = root
        #main page
        self.frame = self.create_frame(self.root)
        self.frame.pack()
        self.frame.config(pady=25)
        self.mainframe = self.create_frame(self.frame)
        self.mainframe.grid(row=0, column=0)
                #-----------#
        titleframe = self.create_frame(self.mainframe) # title
        titleframe.pack()
        title_font = tkFont.Font(family="Segoe UI Black", size=30)
        title = Label(titleframe, text="SUUUUUUUUU", font=title_font, fg="#383838", padx=20)
        title.pack()

        self.button = Button(self.searchframe, fg='#ffffff', bg='#212121', text='Search', 
        command=lambda: self.showimage(),pady=10, padx=15) # Search Button
        searchbutton.grid(row=2, column=0, columnspan=2) 



        self.root.mainloop()
    
    
    def create_frame(self, root):
        return Frame(root, highlightthickness=0, borderwidth=0)

    def add(self, data):
        return self.everything.append(data)
    def showimage(self):
        pass

if __name__ == '__main__':
    App(root)