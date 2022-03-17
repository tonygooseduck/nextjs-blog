---
title: 'Finding files with fuzzy path matching in vim'
date: '2022-03-17'
---

Since I will be using the package manager for installing packages, you would need vim version 8.0 beyond to follow along.  
`:h packages` 

### fzf: a general purpose command line fuzzy finder
##### Install, Configuration
1. Clone the fzf project from github(`$VIMCONFIG/pack/bundle/start`)
1. Run the install script `$VIMCONFIG/pack/bundle/start/fzf/install --bin`
1. Add bin to `$PATH`
1. optional)Normal mode mapping
##### Query files: filter and sort by filename
> `<C-{a~z}>` means holding Ctrl and pressing the following alphabetical character at the same time  
> `<CR>` means carriage return, using the Enter button on keyboard
1. Many ways to query, so just relax and gradually get the hang of it
1. interface operation: `<C-j>, <C-k>`
1. Different ways to open queried files:
> - `<CR>`: open into current window
> - `<C-x>`: horizontal split the current tab
> - `<C-v>`: vertical split the current tab
> - `<C-t>`: open into new tab 


