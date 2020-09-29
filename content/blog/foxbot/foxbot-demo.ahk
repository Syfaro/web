^d::
    Send, {F8 down}{F8 up}
    Sleep, 250
    Send, {CtrlDown}{Up}{CtrlUp}
    Sleep, 25
    Send, /source{Enter}
    Sleep, 5000
    Send, {ShiftDown}{PrintScreen}{ShiftUp}
return

^e::
    MouseMove 176, 700
    Send, {F8 down}{F8 up}
    Sleep, 250
    Send, @FoxBot https://www.furaffinity.net/view/38343614/
    Sleep, 1000
    MouseMove, 176, 542, 15
    MouseClick, Left
    MouseMove 176, 700, 15
    Sleep, 5000
    Send, {ShiftDown}{PrintScreen}{ShiftUp}
return

^g::
    Send, {F8 down}{F8 up}
    Sleep, 500
    Send, {Ctrl down}v{Ctrl up}
    Sleep, 750
    Send, {Enter}
    Sleep, 5000
    Send, {ShiftDown}{PrintScreen}{ShiftUp}
return

^h::
    Send, {F8 down}{F8 up}
    Sleep, 500
    Send, /groupsource@FoxBot
    Sleep, 25
    Send, {Enter}
    Sleep, 2000
    Send, {Ctrl down}v{Ctrl up}
    Sleep, 750
    Send, {Enter}
    Sleep, 6000
    Send, {ShiftDown}{PrintScreen}{ShiftUp}
return

^i::
    Send, {F8 down}{F8 up}
    Sleep, 250
    Send, {CtrlDown}{Up}{CtrlUp}
    Sleep, 25
    Send, /mirror{Enter}
    Sleep, 4000
    Send, {ShiftDown}{PrintScreen}{ShiftUp}
return

^k::
    Send, {F8 down}{F8 up}
    Sleep, 500
    Send, {Ctrl down}v{Ctrl up}
    Sleep, 750
    Send, {Enter}
    Sleep, 5000
    Send, {ShiftDown}{PrintScreen}{ShiftUp}
return

^j::
    MouseGetPos, xpos, ypos
    MsgBox The cursor is at X%xpos% Y%ypos%.
return
