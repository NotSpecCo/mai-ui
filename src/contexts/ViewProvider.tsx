import { createContext, h } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { SelectablePriority } from '../enums';
import { ComponentBaseProps } from '../models';

type Selected = {
  [key in SelectablePriority]: {
    id?: string;
    onSelect?: (selectedId: string) => void;
  };
};

type ViewContextValue = {
  homeMenuOpen: boolean;
  appbarOpen: boolean;
  selected: Selected;
  setAppbarOpen: (open: boolean) => void;
  setHomeMenuOpen: (open: boolean) => void;
  addSelectedListener: (
    priority: SelectablePriority,
    onSelect?: (selectedId: string) => void
  ) => void;
};

const defaultValue: ViewContextValue = {
  homeMenuOpen: false,
  appbarOpen: false,
  selected: {
    [SelectablePriority.Low]: {},
    [SelectablePriority.Medium]: {},
    [SelectablePriority.High]: {},
  },
  setAppbarOpen: (open) => {
    console.log(open);
  },
  setHomeMenuOpen: (open) => {
    console.log(open);
  },
  addSelectedListener: () => {},
};

const ViewContext = createContext<ViewContextValue>(defaultValue);

type ViewProviderProps = ComponentBaseProps;

export function ViewProvider(props: ViewProviderProps): h.JSX.Element & any {
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const [appbarOpen, setAppbarOpen] = useState(false);
  const [selected, setSelected] = useState<Selected>({
    [SelectablePriority.Low]: {},
    [SelectablePriority.Medium]: {},
    [SelectablePriority.High]: {},
  });

  // useListNav({
  //   priority: SelectablePriority.Low,
  //   updateRouteOnChange: true,
  //   onSelect: selected[SelectablePriority.Low].onSelect,
  // });

  // useListNav({
  //   priority: SelectablePriority.Medium,
  //   updateRouteOnChange: false,
  //   onSelect: selected[SelectablePriority.Medium].onSelect,
  // });

  // useListNav({
  //   priority: SelectablePriority.High,
  //   updateRouteOnChange: false,
  //   onSelect: selected[SelectablePriority.High].onSelect,
  // });

  function addSelectedListener(
    priority: SelectablePriority,
    onSelect?: (selectedId: string) => void
  ) {
    setSelected((prev) => ({
      ...prev,
      [priority]: { ...prev[priority], onSelect },
    }));
  }

  return (
    <ViewContext.Provider
      value={{
        homeMenuOpen,
        appbarOpen,
        selected,
        setAppbarOpen,
        setHomeMenuOpen,
        addSelectedListener,
      }}
    >
      {props.children}
    </ViewContext.Provider>
  );
}

export function useView(): ViewContextValue {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
}

type UseSelectedProps = {
  priority: SelectablePriority;
  onChange?: (selectedId: string) => void;
  onSelect?: (selectedId: string) => void;
};
export function useSelected(props: UseSelectedProps) {
  const { selected, addSelectedListener } = useContext(ViewContext);

  useEffect(() => {
    if (props.onSelect) {
      addSelectedListener(props.priority, props.onChange);
    }
  }, []);

  useEffect(() => {
    props.onChange?.(selected[props.priority].id);
  }, [selected[props.priority]]);
}
