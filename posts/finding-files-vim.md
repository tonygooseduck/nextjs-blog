---
title: 'Finding files with fuzzy path matching in vim'
date: '2022-03-17'
---

Since I will be using the package manager for installing packages, you would need vim version 8.0 beyond to follow along.  
`:h packages` for more information on how the package manager works in vim.

### fzf: a general purpose command line fuzzy finder
##### Install, Configuration
- Clone the fzf project from github
> `cd $VIMCONFIG/pack/bundle/start`  
> `git clone $repo_url`
- Run the install script
> `$VIMCONFIG/pack/bundle/start/fzf/install --bin`
- Add bin to `$PATH`
- optional)Normal mode mapping
##### Query files: filter and sort by filename
`<C-{a~z}>` means holding Ctrl and pressing the following alphabetical character at the same time  
`<CR>` means carriage return, using the Enter button on keyboard
1. Many ways to query, so just relax and gradually get the hang of it
1. interface operation: `<C-j>, <C-k>`
1. Different ways to open queried files:
> - `<CR>`: open into current window
> - `<C-x>`: horizontal split the current tab
> - `<C-v>`: vertical split the current tab
> - `<C-t>`: open into new tab 
#### Filter out files with git or ripgrep
By default, fzf builds a list of all the files under your current working directory using `find`. And that list could get messy if you are working with projects that has a few dependencies on other files, for example projects using npm or yarn.
For most cases, it would be convenient to exclude those files under the node_modules directory from the fzf built list.  
One way would be using the `.gitignore` file to ignore the whole node_modules directory and then change the `FZF_DEFAULT_COMMAND` environment variable. By setting 
> `export FZF_DEFAULT_COMMAND='git ls-files'`

 fzf will exlcude all files under node_modules, making it easier to sort and filter files you need.
 
However, since `git ls-files` only works with files in the index and the file tree, new files that have been created cannot be found unless being added with `git add`.  

Another way would be to use `ripgrep` and set the environment variable to
> `export FZF_DEFAULT_COMMAND='rg --files'`

which would automatic filter out gitignore globs while keeping track of files not yet added to the git index tree.
