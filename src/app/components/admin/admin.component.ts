import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AdminService } from '../../core/admin.service';
import { ActiveUser } from '../../core/types';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  private readonly adminService = inject(AdminService);

  readonly users = signal<ActiveUser[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly count = computed(() => this.users().length);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.adminService.getActiveUsers().subscribe({
      next: (list) => {
        this.users.set(list);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message ?? 'Failed to load active users');
        this.loading.set(false);
      },
    });
  }

  formatDate(iso: string): string {
    if (!iso) return '—';
    const d = new Date(iso);
    return d.toLocaleString();
  }

  trackByPublicId(_index: number, u: ActiveUser): string {
    return u.publicId;
  }
}
