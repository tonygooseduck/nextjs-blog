---
title: 'Manage multiple files in vim'
date: '2022-03-22'
---

When I first transitioned from using VSCode tousing vim, one thing that took me some time getting used to was the way vim manages multiple files.

Before understanding the vim way of managing files, there are some terminology that vim uses, which are quite different from other IDEs.
> - buffer: a buffer is an in memory representation of opened files in vim.

There's also a buffer list that shows all the buffer vim manages right now(`:ls`). Each buffer has its own name and is assigned a unique number, you can switch between buffers using `:buffer {number}`, however you cannot change the number assigned to each buffer, therefore you would need to memorize those numbers in order to jump between them.

In addition to buffer list, there's also an argument list in vim. Argument list are formed by passing a list of files as argument when running the vim command. More importantly, argument list can be manipulated, making it more flexible than buffer list when trying to manipulate multiple files.

Speaking of buffer, there's also window and tab in vim.
> - window: a window is a viewport onto a buffer.

So there isn't a one to one relationship between a window and a buffer, you can open the same buffer in multiple windows, for example when you are editing parts of a large file, you might want to reference other parts of the same file without having to keep jumping back and forth in the same file.
> - tab: a tab is kind of like a container that holds a collection of windows.

Rather than being like a tab in an IDE(which is more like a buffer in vim), a tab is more like a workspace or container that organizes your working windows. You might open a new tab when there's a urgent task that needs to be dealt with immediately, but it might be complete different from what you are working on now. Without having to throw the uncomplete work aside, you can merely open a new tab to deal with the task, and return to the tab with uncompleted work after you finish.
